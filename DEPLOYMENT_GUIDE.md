# Vercel Deployment Guide for QED Championship

## Issues Fixed

1. ✅ Removed `"use client"` from root layout.tsx
2. ✅ Created proper vercel.json configuration
3. ✅ Updated Next.js configuration for deployment
4. ✅ Added proper build optimizations

## Deployment Steps

### 1. Environment Variables
Set these in your Vercel project dashboard:

```bash
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
DATABASE_URL=your-database-url
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

### 2. Build Settings in Vercel
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Root Directory**: `frontend`

### 3. Deploy from GitHub
1. Connect your GitHub repository to Vercel
2. Set the root directory to `frontend`
3. Deploy

### 4. Common Issues & Solutions

#### 404 Error
- Ensure all environment variables are set
- Check that the root directory is set to `frontend`
- Verify the build command runs successfully locally

#### Build Failures
- Run `npm run build` locally to test
- Check for TypeScript/ESLint errors
- Ensure all dependencies are in package.json

#### Runtime Errors
- Check browser console for client-side errors
- Verify API endpoints are accessible
- Check authentication configuration

## Local Testing

Before deploying, test locally:

```bash
cd frontend
npm install
npm run build
npm start
```

## File Structure for Vercel

```
frontend/          # Root directory for Vercel
├── app/           # Next.js app directory
├── components/    # React components
├── lib/           # Utilities and configurations
├── public/        # Static assets
├── next.config.mjs
├── package.json
└── vercel.json    # Vercel configuration
```

## Backend Deployment

If you're also deploying the backend:
1. Deploy backend to a service (Railway, Render, etc.)
2. Update `NEXT_PUBLIC_API_URL` in Vercel environment variables
3. Ensure CORS is properly configured on backend
