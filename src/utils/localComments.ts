// Local user accounts and comments stored in localStorage
// NOTE: This is a client-side persistence only. For production-grade apps,
// replace with a real backend/database.

export interface LocalUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: number;
}

export interface LocalComment {
  id: string;
  postId: string; // WordPress post id as string for consistency with router param
  authorId: string;
  authorName: string;
  content: string;
  createdAt: number;
}

const USERS_KEY = 'lt_users';
const CURRENT_USER_ID_KEY = 'lt_current_user_id';
const COMMENTS_KEY = 'lt_comments';

const loadUsers = (): LocalUser[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as LocalUser[]) : [];
  } catch {
    return [];
  }
};

const saveUsers = (users: LocalUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const loadComments = (): LocalComment[] => {
  try {
    const raw = localStorage.getItem(COMMENTS_KEY);
    return raw ? (JSON.parse(raw) as LocalComment[]) : [];
  } catch {
    return [];
  }
};

const saveComments = (comments: LocalComment[]) => {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
};

const sha256 = async (text: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

const generateId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

export const getCurrentUser = (): LocalUser | null => {
  const id = localStorage.getItem(CURRENT_USER_ID_KEY);
  if (!id) return null;
  const users = loadUsers();
  return users.find(u => u.id === id) || null;
};

export const signOut = () => {
  localStorage.removeItem(CURRENT_USER_ID_KEY);
};

export const signUp = async (name: string, email: string, password: string): Promise<LocalUser> => {
  const users = loadUsers();
  const normalizedEmail = email.trim().toLowerCase();
  if (users.some(u => u.email === normalizedEmail)) {
    throw new Error('An account with this email already exists');
  }
  const passwordHash = await sha256(password);
  const user: LocalUser = {
    id: generateId(),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
    createdAt: Date.now()
  };
  users.push(user);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_ID_KEY, user.id);
  return user;
};

export const signIn = async (email: string, password: string): Promise<LocalUser> => {
  const users = loadUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find(u => u.email === normalizedEmail);
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const passwordHash = await sha256(password);
  if (user.passwordHash !== passwordHash) {
    throw new Error('Invalid email or password');
  }
  localStorage.setItem(CURRENT_USER_ID_KEY, user.id);
  return user;
};

export const getCommentsForPost = (postId: string): LocalComment[] => {
  return loadComments()
    .filter(c => c.postId === postId)
    .sort((a, b) => a.createdAt - b.createdAt);
};

export const addComment = (postId: string, author: LocalUser, content: string): LocalComment => {
  const all = loadComments();
  const newComment: LocalComment = {
    id: generateId(),
    postId,
    authorId: author.id,
    authorName: author.name,
    content: content.trim(),
    createdAt: Date.now()
  };
  all.push(newComment);
  saveComments(all);
  return newComment;
};

// Simple observer using window storage event for multi-tab sync
type CommentsListener = (comments: LocalComment[]) => void;
const listeners: Record<string, Set<CommentsListener>> = {};

export const observeComments = (postId: string, listener: CommentsListener) => {
  if (!listeners[postId]) listeners[postId] = new Set();
  listeners[postId].add(listener);
  listener(getCommentsForPost(postId));

  const handler = (e: StorageEvent) => {
    if (e.key === COMMENTS_KEY) {
      listener(getCommentsForPost(postId));
    }
  };
  window.addEventListener('storage', handler);

  return () => {
    listeners[postId].delete(listener);
    window.removeEventListener('storage', handler);
  };
};

// Notify local listeners in this tab after changes
export const notifyCommentsUpdated = (postId: string) => {
  const postListeners = listeners[postId];
  if (postListeners) {
    const snapshot = getCommentsForPost(postId);
    postListeners.forEach(fn => fn(snapshot));
  }
};

