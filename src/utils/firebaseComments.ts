import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  type DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { LocalUser } from './firebaseAuth';

export interface LocalComment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: number;
}

// Convert Firestore document to LocalComment
const docToComment = (doc: QueryDocumentSnapshot<DocumentData>): LocalComment => ({
  id: doc.id,
  postId: doc.data().postId,
  authorId: doc.data().authorId,
  authorName: doc.data().authorName,
  content: doc.data().content,
  createdAt: doc.data().createdAt?.toMillis() || Date.now()
});

export const getCommentsForPost = async (postId: string): Promise<LocalComment[]> => {
  const commentsRef = collection(db, 'comments');
  try {
    const q = query(
      commentsRef,
      where('postId', '==', postId),
      orderBy('createdAt', 'asc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docToComment);
  } catch (error: any) {
    // Fallback when composite index is missing: retry without orderBy and sort client-side
    const message = String(error?.message || '');
    if (message.includes('FAILED_PRECONDITION') || message.toLowerCase().includes('index')) {
      try {
        const q = query(
          commentsRef,
          where('postId', '==', postId)
        );
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(docToComment);
        return items.sort((a, b) => a.createdAt - b.createdAt);
      } catch (fallbackErr) {
        console.error('Error fetching comments (fallback):', fallbackErr);
        throw new Error('Failed to load comments');
      }
    }
    console.error('Error fetching comments:', error);
    throw new Error('Failed to load comments');
  }
};

export const addComment = async (postId: string, author: LocalUser, content: string): Promise<LocalComment> => {
  try {
    const commentsRef = collection(db, 'comments');
    const docRef = await addDoc(commentsRef, {
      postId,
      authorId: author.id,
      authorName: author.name,
      content: content.trim(),
      createdAt: serverTimestamp()
    });

    // Return the new comment with the generated ID
    return {
      id: docRef.id,
      postId,
      authorId: author.id,
      authorName: author.name,
      content: content.trim(),
      createdAt: Date.now()
    };
  } catch (error) {
    console.error('Error adding comment:', error);
    throw new Error('Failed to post comment');
  }
};

// Real-time listener for comments (optional - for future use)
export const subscribeToComments = (postId: string, callback: (comments: LocalComment[]) => void) => {
  // This would use onSnapshot for real-time updates
  // For now, we'll just fetch comments when needed
  getCommentsForPost(postId).then(callback).catch(console.error);
};
