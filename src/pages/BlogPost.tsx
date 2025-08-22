import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WORDPRESS_CONFIG } from '../config/wordpress';
import { getSimpleProxiedUrl } from '../utils/simpleCorsProxy';
import {
  addComment as addFirebaseComment,
  getCommentsForPost as getFirebaseCommentsForPost,
  subscribeToComments
} from '../utils/firebaseComments';
import {
  getCurrentUser as getFirebaseCurrentUser,
  signIn as firebaseSignIn,
  signOut as firebaseSignOut,
  signUp as firebaseSignUp,
  onAuthStateChange
} from '../utils/firebaseAuth';


interface BlogPostData {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified?: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface WPComment {
  id: number;
  post: number;
  author_name: string;
  author_url?: string;
  date: string;
  content: { rendered: string };
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<WPComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState<boolean>(false);
  const [commentsError, setCommentsError] = useState<string | null>(null);

  // Local account/auth state
  const [currentUser, setCurrentUser] = useState(getFirebaseCurrentUser());

  // Comment form state
  const [commentContent, setCommentContent] = useState<string>('');
  const [postingComment, setPostingComment] = useState<boolean>(false);

  // Auth modal state
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authName, setAuthName] = useState<string>('');
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const originalUrl = `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts/${id}?_embed`;
        
        // Try to get proxied URL
        let fullUrl = originalUrl;
        try {
          fullUrl = await getSimpleProxiedUrl(originalUrl);
        } catch (error) {
          console.warn('Proxy failed, using direct request');
        }

        const response = await fetch(fullUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BlogPostData = await response.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  useEffect(() => {
    const loadFirebaseComments = async () => {
      if (!id) return;
      setCommentsLoading(true);
      setCommentsError(null);
      try {
        const firebaseComments = await getFirebaseCommentsForPost(id);
        // Map Firebase comments to WPComment-ish for reuse of render structure
        const mapped: WPComment[] = firebaseComments.map((c: any) => ({
          id: c.id as unknown as number, // purely for React key; IDs are unique strings, but cast here for type reuse
          post: parseInt(c.postId, 10) || 0,
          author_name: c.authorName,
          date: new Date(c.createdAt).toISOString(),
          content: { rendered: c.content }
        }));
        // Show newest first
        mapped.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setComments(mapped);
      } catch (e) {
        setCommentsError('Failed to load comments.');
      } finally {
        setCommentsLoading(false);
      }
    };

    loadFirebaseComments();
  }, [id]);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPublishOrUpdated = () => {
    if (!post) return '';
    const published = new Date(post.date).getTime();
    const modified = post.modified ? new Date(post.modified).getTime() : published;
    const isUpdated = modified > published + 60 * 1000; // consider updated if more than 1 minute newer
    const useDate = isUpdated ? (post.modified as string) : post.date;
    return `${isUpdated ? 'Updated' : 'Published'} ${formatDate(useDate)}`;
  };

  const getFeaturedImage = () => {
    if (post?._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#B9CEFF] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error || 'Blog post not found'}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#B9CEFF] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300 mr-3"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/legal-writing')}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Link
                to="/legal-writing"
                className="inline-flex items-center text-[#050706] hover:text-[#D2DE26] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>{getPublishOrUpdated()}</span>
              <span className="text-[#050706]">Legal Writing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Image */}
        {getFeaturedImage() && (
          <div className="mb-8">
            <img
              src={getFeaturedImage()!}
              alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Post Content */}
        <article className="bg-white rounded-xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        

         {/* Comments Section */}
         <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h2>

                     {/* Existing Comments */}
           <div className="bg-white rounded-xl shadow p-6">
             {commentsLoading && comments.length === 0 ? (
               <div className="text-gray-600">Loading comments...</div>
             ) : commentsError ? (
               <div className="text-red-600">{commentsError}</div>
             ) : comments.length === 0 ? (
               <div className="text-gray-500">No comments yet. Be the first to comment.</div>
             ) : (
               <ul className="space-y-6">
                 {comments.map((c) => (
                   <li key={c.id} className="border-b last:border-b-0 border-gray-200 pb-6">
                     <div className="flex items-center justify-between mb-2">
                       <span className="font-medium text-gray-900">{c.author_name || 'Anonymous'}</span>
                       <span className="text-sm text-gray-500">{new Date(c.date).toLocaleString()}</span>
                     </div>
                     <div
                       className="prose max-w-none text-gray-800"
                       dangerouslySetInnerHTML={{ __html: c.content.rendered }}
                     />
                   </li>
                 ))}
               </ul>
             )}
           </div>

          {/* Add Comment */}
          <div className="mt-8 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Write a comment</h3>
            {!currentUser && (
              <div className="mb-4 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">
                You need an account on this site to comment. Sign in or create an account below.
              </div>
            )}

            {/* Auth controls */}
            {!currentUser && (
              <div className="mb-6">
                <div className="flex gap-3 mb-3">
                  <button
                    className={`lt-btn-sm font-semibold ${authMode === 'signin' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                    onClick={() => { setAuthMode('signin'); setAuthError(null); }}
                  >
                    Sign In
                  </button>
                  <button
                    className={`lt-btn-sm font-semibold ${authMode === 'signup' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                    onClick={() => { setAuthMode('signup'); setAuthError(null); }}
                  >
                    Create Account
                  </button>
                </div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setAuthError(null);
                    try {
                      if (authMode === 'signin') {
                        const user = await firebaseSignIn(authEmail, authPassword);
                        setCurrentUser(user);
                      } else {
                        if (!authName.trim()) {
                          setAuthError('Please enter your name.');
                          return;
                        }
                        const user = await firebaseSignUp(authName, authEmail, authPassword);
                        setCurrentUser(user);
                      }
                      setAuthName('');
                      setAuthEmail('');
                      setAuthPassword('');
                    } catch (err: any) {
                      setAuthError(err?.message || 'Authentication failed');
                    }
                  }}
                  className="space-y-3"
                >
                  {authMode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9CEFF]"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9CEFF]"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9CEFF]"
                      placeholder="Your password"
                      required
                    />
                  </div>
                  {authError && <div className="text-red-600 text-sm">{authError}</div>}
                  <button
                    type="submit"
                    className="lt-btn-sm font-semibold bg-[#B9CEFF] text-gray-900 hover:bg-[#A8C0F0]"
                  >
                    {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                  </button>
                </form>
              </div>
            )}

            {/* Comment box */}
            {currentUser && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!id || !currentUser) return;
                  const trimmed = commentContent.trim();
                  if (!trimmed) return;

                  setPostingComment(true);
                  
                  // Create a temporary comment for immediate UI feedback
                  const tempId = Date.now();
                  const tempComment: WPComment = {
                    id: tempId,
                    post: parseInt(id, 10) || 0,
                    author_name: currentUser.name,
                    date: new Date().toISOString(),
                    content: { rendered: trimmed }
                  };

                  // Optimistically update UI (newest first)
                  setComments((prev) => [tempComment, ...prev]);
                  // Clear the form immediately
                  setCommentContent('');
                  setPostingComment(false);

                  // Perform Firestore write in background; reconcile temp on success/failure
                  addFirebaseComment(id, currentUser, trimmed)
                    .then((saved) => {
                      const savedWp: WPComment = {
                        id: saved.id as unknown as number,
                        post: parseInt(saved.postId, 10) || 0,
                        author_name: saved.authorName,
                        date: new Date(saved.createdAt).toISOString(),
                        content: { rendered: saved.content }
                      };
                      // Replace temp with saved (keeping newest-first order)
                      setComments((prev) => prev.map((c) => (c.id === tempId ? savedWp : c)));
                    })
                    .catch((err) => {
                      console.error('Error posting comment:', err);
                      // Remove temp comment on failure
                      setComments((prev) => prev.filter((c) => c.id !== tempId));
                      setCommentsError('Failed to post comment. Please try again.');
                    });
                }}
                className="space-y-4"
              >
                <div className="text-sm text-gray-700">Signed in as <span className="font-medium">{currentUser.name}</span> (<span className="text-gray-500">{currentUser.email}</span>)</div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                  <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9CEFF]"
                    rows={5}
                    placeholder="Write your comment..."
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                                     <button
                     type="submit"
                     disabled={postingComment}
                     className="lt-btn-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {postingComment ? 'Posting...' : 'Post Comment'}
                   </button>
                  <button
                    type="button"
                    onClick={() => { firebaseSignOut(); setCurrentUser(null); }}
                    className="lt-btn-sm bg-gray-200 text-gray-900"
                  >
                    Sign Out
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/legal-writing"
              className="bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
