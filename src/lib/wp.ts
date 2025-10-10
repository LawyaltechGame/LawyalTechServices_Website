export const WP_BASE = "https://lawyaltech.org";

export type WpMedia = { source_url?: string; alt_text?: string };
export type WpPost = {
  modified: string;
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { ["wp:featuredmedia"]?: WpMedia[] };
};

export function getFeaturedImage(p: WpPost) {
  const m = p?._embedded?.["wp:featuredmedia"]?.[0];
  return {
    src: m?.source_url || null,
    alt: m?.alt_text || p?.title?.rendered || "Featured image",
  };
}

// CORS proxy function
async function getProxiedUrl(url: string): Promise<string> {
  // Try to use a CORS proxy if direct request fails
  const corsProxies = [
    'https://cors-anywhere.herokuapp.com/',
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?'
  ];

  for (const proxy of corsProxies) {
    try {
      const testResponse = await fetch(`${proxy}${url}`, { 
        method: 'HEAD',
        mode: 'cors'
      });
      if (testResponse.ok) {
        return `${proxy}${url}`;
      }
    } catch (error) {
      console.warn(`Proxy ${proxy} failed, trying next...`);
      continue;
    }
  }
  
  // If all proxies fail, return original URL
  return url;
}

export async function fetchPosts(perPage = 6, page = 1) {
  const originalUrl = `${WP_BASE}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed=1`;
  
  try {
    // First try direct request
    const res = await fetch(originalUrl);
    if (res.ok) {
      const posts = await res.json();
      const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);
      const totalPosts = Number(res.headers.get("X-WP-Total") || posts.length);
      console.log('Direct API Response:', { 
        url: originalUrl,
        postsCount: posts.length, 
        totalPages, 
        totalPosts,
        headers: {
          'X-WP-Total': res.headers.get("X-WP-Total"),
          'X-WP-TotalPages': res.headers.get("X-WP-TotalPages")
        }
      });
      return { posts, totalPages, totalPosts };
    }
  } catch (error) {
    console.warn('Direct request failed, trying CORS proxy...', error);
  }

  // If direct request fails, try with CORS proxy
  const proxiedUrl = await getProxiedUrl(originalUrl);
  const res = await fetch(proxiedUrl);
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);
  const totalPosts = Number(res.headers.get("X-WP-Total") || posts.length);
  console.log('Proxy API Response:', { 
    url: proxiedUrl,
    postsCount: posts.length, 
    totalPages, 
    totalPosts,
    headers: {
      'X-WP-Total': res.headers.get("X-WP-Total"),
      'X-WP-TotalPages': res.headers.get("X-WP-TotalPages")
    }
  });
  return { posts, totalPages, totalPosts };
}

export async function fetchPostBySlug(slug: string) {
  const originalUrl = `${WP_BASE}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`;
  
  try {
    // First try direct request
    const res = await fetch(originalUrl);
    if (res.ok) {
      const data = await res.json();
      return data[0] || null;
    }
  } catch (error) {
    console.warn('Direct request failed, trying CORS proxy...');
  }

  // If direct request fails, try with CORS proxy
  const proxiedUrl = await getProxiedUrl(originalUrl);
  const res = await fetch(proxiedUrl);
  if (!res.ok) throw new Error("Failed to fetch post");
  const data = await res.json();
  return data[0] || null;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
