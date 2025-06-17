# Global Print Co. Website Deployment Guide for GoDaddy

## Overview
Your professional Global Print Co. website is ready for deployment. This guide will help you migrate from Replit to GoDaddy hosting.

## Website Features Completed
- ✅ Authentic Global Print Co. branding
- ✅ 65+ global locations with search functionality
- ✅ Complete service offerings (Shopify storefronts, translation services, etc.)
- ✅ Customer challenge solutions
- ✅ Product portfolio with zero MOQs
- ✅ Contact forms with backend API
- ✅ Mobile-responsive design
- ✅ Google Reviews integration
- ✅ Social media links
- ✅ Updated contact info: orders@globalprintco.com, 334-796-0770

## Deployment Options for GoDaddy

### Option 1: Static Site Deployment (Recommended for Basic Hosting)

**Step 1: Export Static Files**
1. Download your project files from Replit
2. Run `npm run build` locally to create production files
3. Upload the `dist` folder contents to GoDaddy's file manager

**Step 2: GoDaddy File Manager Upload**
1. Login to GoDaddy cPanel
2. Navigate to File Manager
3. Go to public_html folder
4. Upload all files from your build folder
5. Extract if needed

### Option 2: Node.js Hosting (For Full Functionality)

**Requirements:**
- GoDaddy Shared Hosting with Node.js support OR
- GoDaddy VPS/Dedicated server

**Step 1: Prepare Files**
```bash
# In your local environment
npm install
npm run build
```

**Step 2: Upload Project**
1. Upload entire project folder via FTP/File Manager
2. Install dependencies on server:
```bash
npm install --production
```

**Step 3: Configure Start Script**
Create `.htaccess` file:
```apache
RewriteEngine On
RewriteRule ^(.*)$ /server.js [QSA,L]
```

## Database Setup (If Using Contact Forms)

### Option A: Keep Replit Backend
- Keep contact form pointing to Replit API
- Update CORS settings to allow globalprintco.com

### Option B: GoDaddy Database
1. Create MySQL database in GoDaddy cPanel
2. Update connection strings in server files
3. Run database migrations

## Domain Configuration

**Step 1: Update DNS (if domain not already on GoDaddy)**
- Point nameservers to GoDaddy
- Update A records to point to GoDaddy hosting IP

**Step 2: SSL Setup**
- Enable SSL certificate in GoDaddy cPanel
- Force HTTPS redirects

## Environment Variables
Set these in GoDaddy hosting environment:
```
NODE_ENV=production
PORT=3000
DATABASE_URL=[your-database-url]
```

## File Structure for Upload
```
public_html/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── api/ (if using Node.js)
└── .htaccess
```

## Testing Checklist
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits properly
- [ ] Mobile responsiveness
- [ ] Google Reviews link works
- [ ] Social media links function
- [ ] Global locations search works

## Performance Optimization
1. Enable Gzip compression in cPanel
2. Set up browser caching
3. Optimize images (already done)
4. Enable CDN if available

## Backup Strategy
- Export database regularly
- Keep local copy of all files
- Use GoDaddy backup features

## Support Contacts
- GoDaddy Technical Support: Available in your hosting panel
- Domain Issues: GoDaddy domain management
- Website Issues: Contact your developer

## Alternative: Professional Migration Service
If you prefer professional setup:
1. Contact GoDaddy migration services
2. Or hire a web developer familiar with Node.js deployments
3. Provide them with this Replit project link

Your website is production-ready with all Global Print Co. branding, authentic contact information, and comprehensive business features.