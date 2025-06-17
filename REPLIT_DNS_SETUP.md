# Replit DNS Setup for globalprintco.com

## Step 1: Deploy on Replit
1. Click the "Deploy" button in your Replit interface
2. Your app will be deployed to a URL like: `https://your-project-name.your-username.replit.app`
3. Note this URL - you'll need it for DNS configuration

## Step 2: Configure Custom Domain in Replit
1. Go to your Replit deployment dashboard
2. Click on "Domains" or "Custom Domain"
3. Add your domain: `globalprintco.com`
4. Add www subdomain: `www.globalprintco.com`
5. Replit will provide specific DNS records to configure

## Step 3: GoDaddy DNS Configuration
Log into your GoDaddy account and go to DNS Management:

### Add CNAME Records:
```
Type: CNAME
Name: www
Value: [your-replit-app-url]
TTL: 600 (10 minutes)
```

### Add A Record for Root Domain:
```
Type: A
Name: @
Value: [IP provided by Replit]
TTL: 600 (10 minutes)
```

## Step 4: Verify SSL Certificate
- Replit automatically provisions SSL certificates
- Your site will be accessible via HTTPS
- May take 5-15 minutes to propagate

## Step 5: Test Your Setup
1. Visit `https://globalprintco.com`
2. Visit `https://www.globalprintco.com`
3. Verify both redirect to your website
4. Test contact forms and all functionality

## Alternative: Direct Upload to GoDaddy
If you prefer traditional hosting:
1. Use the files in `deployment-package` folder
2. Upload to GoDaddy File Manager → public_html
3. No DNS changes needed (domain already points to GoDaddy)

## DNS Propagation Time
- Changes typically take 5-30 minutes
- Full global propagation can take up to 24 hours
- Use tools like `nslookup` or online DNS checkers to verify

## Troubleshooting
- If site doesn't load, check DNS propagation
- Verify CNAME and A records are correct
- Contact Replit support for deployment-specific issues
- Contact GoDaddy support for DNS configuration help

Your Global Print Co. website is ready for production deployment!