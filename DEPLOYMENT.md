# Deployment Instructions for VPS

## Quick Start

1. **Build the site**:
```bash
npm run build
```

2. **Upload to your VPS**:
```bash
# Replace with your server details
rsync -avz --delete dist/ user@your-server.com:/var/www/your-domain/
```

3. **Your site is ready!**

## Detailed VPS Setup

### Prerequisites
- Node.js installed locally for building
- VPS with nginx or Apache
- Domain pointing to your VPS

### Step 1: Build Locally
```bash
npm install
npm run build
```

This creates a `dist/` folder with all static files.

### Step 2: Upload Files

#### Option A: Using rsync (recommended)
```bash
rsync -avz --delete dist/ user@your-server.com:/var/www/your-domain/
```

#### Option B: Using SCP
```bash
scp -r dist/* user@your-server.com:/var/www/your-domain/
```

#### Option C: Using FTP
Upload the entire contents of the `dist/` folder to your web root.

### Step 3: Configure Web Server

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/your-domain;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Enable gzip
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

#### Apache Configuration (.htaccess)
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### Step 4: Add SSL (Recommended)

Using Let's Encrypt with nginx:
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Automated Deployment Script

Create `deploy.sh` in your project root:

```bash
#!/bin/bash
echo "Building site..."
npm run build

echo "Deploying to server..."
rsync -avz --delete dist/ user@your-server.com:/var/www/your-domain/

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

## Important Notes

- The site is completely static - no Node.js required on the server
- All files in `dist/` folder need to be uploaded
- Make sure file permissions are correct (usually 644 for files, 755 for directories)
- Clear browser cache after deployment to see changes

## Troubleshooting

**Site not loading?**
- Check file permissions
- Verify nginx/Apache configuration
- Check error logs: `/var/log/nginx/error.log`

**Styles not loading?**
- Ensure all files from `dist/_astro/` are uploaded
- Check browser console for 404 errors

**Changes not showing?**
- Clear browser cache
- Use incognito/private browsing to test