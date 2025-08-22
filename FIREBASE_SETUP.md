# Firebase Setup Guide

## 1. Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click on the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on the web app icon (</>)
7. Copy the configuration object

## 2. Update Firebase Config

Replace the placeholder values in `src/config/firebase.ts` with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 3. Enable Authentication

1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## 4. Set Up Firestore Database

1. In Firebase Console, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

## 5. Set Up Firestore Security Rules

In the Firestore Database section, go to "Rules" tab and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read all comments
    match /comments/{commentId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to a blog post
3. Try to create an account and post a comment
4. Check Firebase Console to see the new user and comment

## What's Changed

- **Authentication**: Now uses Firebase Auth instead of localStorage
- **Comments**: Stored in Firestore instead of localStorage
- **Real-time**: Users can see comments from other users across devices
- **Security**: Proper authentication and database rules
- **Scalability**: Ready for production use

## Files Modified

- `src/config/firebase.ts` - Firebase configuration
- `src/utils/firebaseAuth.ts` - Firebase authentication utilities
- `src/utils/firebaseComments.ts` - Firebase comments utilities
- `src/pages/BlogPost.tsx` - Updated to use Firebase

## Next Steps

- Add email verification
- Implement password reset
- Add social login (Google, Facebook, etc.)
- Add comment moderation features
- Implement real-time comment updates
