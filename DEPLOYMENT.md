# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial unit converter implementation"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

## Manual Build & Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## Environment Variables

No environment variables are required for basic functionality.

## Performance Optimizations

The project is already optimized for production:

- ✅ Next.js App Router for optimal performance
- ✅ TypeScript for type safety
- ✅ TailwindCSS for minimal CSS bundle
- ✅ Optimized fonts and images
- ✅ SEO metadata configured
- ✅ Responsive design
- ✅ Ad slots ready for monetization

## Ad Integration

To integrate real ads:

1. Replace `AdSlot` component placeholders with actual ad code
2. Update ad dimensions in `src/components/AdSlot.tsx`
3. Add ad network scripts to `src/app/layout.tsx`

## Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Analytics

Add analytics by updating `src/app/layout.tsx`:

```tsx
// Add to <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## Monitoring

Consider adding:
- Vercel Analytics
- Sentry for error tracking
- Google Search Console
- Core Web Vitals monitoring
