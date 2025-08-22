import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
  updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';

export interface LocalUser {
  id: string;
  name: string;
  email: string;
  createdAt: number;
}

// Convert Firebase User to our LocalUser interface
const firebaseUserToLocalUser = (user: User): LocalUser => ({
  id: user.uid,
  name: user.displayName || 'Anonymous',
  email: user.email || '',
  createdAt: user.metadata.creationTime ? new Date(user.metadata.creationTime).getTime() : Date.now()
});

export const getCurrentUser = (): LocalUser | null => {
  const user = auth.currentUser;
  return user ? firebaseUserToLocalUser(user) : null;
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const signUp = async (name: string, email: string, password: string): Promise<LocalUser> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update the user's display name
    if (user) {
      await updateProfile(user, {
        displayName: name
      });
    }
    
    return firebaseUserToLocalUser(user);
  } catch (error: any) {
    console.error('Error signing up:', error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('An account with this email already exists');
    } else if (error.code === 'auth/weak-password') {
      throw new Error('Password should be at least 6 characters');
    } else {
      throw new Error(error.message || 'Failed to create account');
    }
  }
};

export const signIn = async (email: string, password: string): Promise<LocalUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return firebaseUserToLocalUser(user);
  } catch (error: any) {
    console.error('Error signing in:', error);
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      throw new Error('Invalid email or password');
    } else {
      throw new Error(error.message || 'Failed to sign in');
    }
  }
};

// Hook to listen to auth state changes
export const onAuthStateChange = (callback: (user: LocalUser | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user ? firebaseUserToLocalUser(user) : null);
  });
};
