# GoDaddy Migration Steps for GlobalPrintCo.com

## Immediate Steps for Domain Migration

### 1. Access Your GoDaddy Account
- Login to your GoDaddy account
- Navigate to "My Products" → "Web Hosting"

### 2. Choose Migration Method

**Method A: Simple Static Upload (Fastest)**
1. Go to your hosting cPanel → File Manager
2. Navigate to `public_html` folder
3. Delete default files (index.html, etc.)
4. Download this Replit project as ZIP
5. Upload and extract all files from the `client` folder
6. Your site will be live immediately

**Method B: Full-Stack Deployment (Recommended)**
1. Check if your GoDaddy plan supports Node.js
2. If yes, upload entire project folder
3. Install dependencies via terminal/SSH
4. Configure environment variables

### 3. Domain Setup
- Your domain globalprintco.com should automatically point to your hosting
- If not, update DNS A records to your GoDaddy hosting IP
- Enable SSL certificate (free with most GoDaddy plans)

### 4. Test Your Site
- Visit globalprintco.com
- Test contact form submission
- Verify all pages load correctly
- Check mobile responsiveness

### 5. Update Contact Forms
- Currently forms submit to Replit backend
- Either keep using Replit API or migrate to GoDaddy database
- Update CORS settings if keeping Replit backend

## Need Help?
Contact GoDaddy support or hire a developer familiar with Node.js deployments. Your website is complete and ready for production use.

## Files Ready for Upload
All website files are in this Replit project with:
- Complete Global Print Co. branding
- All 65+ locations with search
- Working contact forms
- Mobile-responsive design
- Authentic company content