# WordPress Blog Integration Setup Guide

This guide will help you connect your WordPress blog to your React website so that when users click on "SERVICES" → "Legal Writing", they'll see your WordPress blog content in real-time.

## 🚀 Quick Setup

### 1. Update WordPress Configuration

Edit `src/config/wordpress.ts` and replace the `BASE_URL` with your actual WordPress site URL:

```typescript
export const WORDPRESS_CONFIG = {
  // Replace this with your actual WordPress site URL
  BASE_URL: 'https://your-actual-wordpress-site.com',
  // ... other settings
};
```

### 2. Ensure WordPress REST API is Enabled

Your WordPress site must have the REST API enabled (it's enabled by default in modern WordPress installations).

## 🔧 Detailed Configuration

### WordPress Site Requirements

1. **REST API Enabled**: Ensure `/wp-json/` endpoint is accessible
2. **CORS Headers**: If you encounter CORS issues, add this to your WordPress site's `.htaccess`:

```apache
# Add CORS headers for React app
<IfModule mod_headers.c>
    Header always set Access-Control-Allow-Origin "*"
    Header always set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header always set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

3. **Featured Images**: Ensure posts have featured images for better display

### Configuration Options

You can customize the following settings in `src/config/wordpress.ts`:

- **`REFRESH_INTERVAL`**: How often to check for new posts (default: 30 seconds)
- **`POSTS_PER_PAGE`**: Number of posts to load initially (default: 12)
- **`ENABLE_REAL_TIME_UPDATES`**: Toggle real-time updates on/off

## 📱 Features

### Real-Time Updates
- **Automatic Polling**: Checks for new posts every 30 seconds (configurable)
- **Live Refresh**: Users can manually refresh content
- **Last Updated Indicator**: Shows when content was last refreshed

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Image Handling**: Displays featured images with hover effects
- **Loading States**: Smooth loading animations and error handling

### User Experience
- **Load More**: Pagination with "Load More" button
- **External Links**: Opens WordPress posts in new tabs
- **Error Handling**: Graceful fallbacks for network issues

## 🛠️ Troubleshooting

### Common Issues

1. **CORS Errors**
   - Solution: Add CORS headers to WordPress site
   - Alternative: Use a CORS proxy service

2. **Posts Not Loading**
   - Check WordPress REST API endpoint: `https://yoursite.com/wp-json/wp/v2/posts`
   - Verify site URL in configuration
   - Check browser console for error messages

3. **Images Not Displaying**
   - Ensure posts have featured images set
   - Check if `_embedded` parameter is working

4. **Real-Time Updates Not Working**
   - Verify `ENABLE_REAL_TIME_UPDATES` is set to `true`
   - Check if `REFRESH_INTERVAL` is reasonable (not too frequent)

### Debug Mode

Enable debug logging by adding this to your browser console:

```javascript
localStorage.setItem('wordpress-debug', 'true');
```

## 🔄 Customization

### Styling
The component uses Tailwind CSS classes that match your existing design system. You can customize:

- Colors: Update the `bg-[#B9CEFF]` classes
- Spacing: Modify padding and margin classes
- Typography: Adjust font sizes and weights

### Content Display
Customize how posts are displayed by modifying:

- Post layout in the grid
- Excerpt length
- Date formatting
- Image handling

### API Integration
Extend the integration by:

- Adding categories/tags filtering
- Implementing search functionality
- Adding author information
- Including custom post types

## 📊 Performance

### Optimization Tips

1. **Image Optimization**: Use WordPress image optimization plugins
2. **Caching**: Implement WordPress caching for faster API responses
3. **CDN**: Use a CDN for faster content delivery
4. **Lazy Loading**: Images are already optimized with hover effects

### Monitoring

Track performance with:
- Browser DevTools Network tab
- WordPress site analytics
- User engagement metrics

## 🚀 Deployment

### Production Checklist

- [ ] Update WordPress URL in configuration
- [ ] Test CORS headers
- [ ] Verify REST API accessibility
- [ ] Test real-time updates
- [ ] Optimize images
- [ ] Set up monitoring

### Environment Variables

For production, consider using environment variables:

```typescript
BASE_URL: process.env.REACT_APP_WORDPRESS_URL || 'https://your-site.com'
```

## 📞 Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify WordPress REST API endpoint
3. Test with a simple fetch request
4. Check network tab for failed requests

## 🎯 Next Steps

After successful integration:

1. **Content Strategy**: Plan your blog content calendar
2. **SEO Optimization**: Ensure proper meta tags and structured data
3. **Analytics**: Track user engagement with blog content
4. **Social Sharing**: Add social media sharing buttons
5. **Newsletter Integration**: Connect blog to email marketing

---

**Note**: This integration provides real-time updates by polling the WordPress API. For even more real-time updates, consider implementing WebSockets or Server-Sent Events for instant notifications when new posts are published.
