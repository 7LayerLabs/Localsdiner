# Vercel Deployment Troubleshooting Guide

## Issue: Images Not Showing on Vercel Deployment

### Confirmed Status:
✓ All 109 images ARE in the GitHub repository
✓ All image folders are properly structured
✓ HTML files correctly reference the image paths

### Most Likely Causes:

1. **Vercel deployed before images were pushed**
   - Solution: Redeploy from Vercel dashboard

2. **Large image files causing timeout**
   - Total images size: 280MB
   - Some individual files are very large (10-17MB)

3. **Build/deployment not completed**
   - Check Vercel deployment logs

## Fix Steps:

### Option 1: Redeploy from Vercel Dashboard (Recommended)

1. Go to https://vercel.com/7layerlabs-projects/localsdiner
2. Click on the "Deployments" tab
3. Find the latest deployment
4. Click the three dots menu (...) 
5. Select "Redeploy"
6. Wait for deployment to complete

### Option 2: Trigger New Deployment

1. Make a small change (like add a comment to index.html)
2. Commit and push to GitHub
3. Vercel will automatically redeploy

### Option 3: Check Vercel Project Settings

1. Go to Project Settings in Vercel
2. Verify "Root Directory" is set to `.` (root)
3. Verify "Framework Preset" is set to "Other" or "None"
4. Verify "Build Command" is empty (static site)
5. Verify "Output Directory" is empty or `.`

### Option 4: Optimize Large Images

Some images are very large and may cause deployment issues:
- pieorder_ad.png: 9.3MB
- brand.png: 17MB

To fix:
1. Compress these images using an online tool
2. Replace the large files
3. Commit and push again

## How to Test:

After redeploying, test these specific image URLs:

1. Logo: https://localsdiner.vercel.app/images/branding/Banner-sign.png
2. Breakfast: https://localsdiner.vercel.app/images/breakfast/breakfast_01.jpeg
3. Dessert: https://localsdiner.vercel.app/images/desserts/dessert_01.jpeg

If these load directly, the images are deployed correctly.

## Additional Notes:

- Vercel automatically serves static files from your repository
- No special configuration needed for HTML/CSS/Images
- The site should work immediately after a successful deployment

## Quick Command to Force Redeploy:

```bash
cd /Users/derek/Desktop/locals
git commit --allow-empty -m "Force redeploy for Vercel"
git push origin main
```

This creates an empty commit that triggers Vercel to redeploy.
