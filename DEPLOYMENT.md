# Deployment Guide

## Server Configuration for React Router

This application uses React Router with BrowserRouter, which requires server configuration to handle client-side routing properly.

### Problem

When accessing routes directly (e.g., `https://m.essenceofme.org/signup`), the server returns a 404 error because it's looking for a file at `/signup` that doesn't exist.

### Solution

The server needs to be configured to serve `index.html` for all routes, allowing React Router to handle routing on the client side.

## Apache Configuration

If you're using Apache (like XAMPP), the `.htaccess` file in the `public/` folder will be automatically copied to `dist/` during build and should handle this.

### Requirements

- `mod_rewrite` must be enabled in Apache
- `.htaccess` files must be allowed (usually enabled by default)

### Manual Configuration (if .htaccess doesn't work)

If `.htaccess` doesn't work, you can configure Apache directly:

```apache
<VirtualHost *:80>
    ServerName m.essenceofme.org
    DocumentRoot /path/to/your/dist

    <Directory /path/to/your/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # Fallback to index.html for client-side routing
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

## Nginx Configuration

If you're using Nginx, add this to your server block:

```nginx
server {
    listen 80;
    server_name m.essenceofme.org;
    root /path/to/your/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Other Hosting Services

### Netlify

Create a `public/_redirects` file (already created):

```
/*    /index.html   200
```

### Vercel

Create a `vercel.json` file:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### GitHub Pages

GitHub Pages doesn't support server-side configuration. You'll need to:

1. Use HashRouter instead of BrowserRouter, OR
2. Use a custom 404.html that redirects to index.html

## Build and Deploy

1. Build the application:

   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your server

3. Ensure the `.htaccess` file (for Apache) is in the root of your deployment directory

4. Test by accessing routes directly:
   - `https://m.essenceofme.org/`
   - `https://m.essenceofme.org/signup`
   - `https://m.essenceofme.org/login`
   - `https://m.essenceofme.org/forgot-password`

## Troubleshooting

### Still getting 404 errors?

1. **Check if mod_rewrite is enabled** (Apache):

   ```bash
   # Check if mod_rewrite is loaded
   apache2ctl -M | grep rewrite
   ```

   If not enabled, enable it:

   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

2. **Check .htaccess permissions**: Ensure the file is readable:

   ```bash
   chmod 644 .htaccess
   ```

3. **Check AllowOverride setting**: In your Apache config, ensure `AllowOverride All` is set for your directory

4. **Check server logs**: Look at Apache/Nginx error logs for specific issues

5. **Verify base path**: If your app isn't at the root, update the RewriteBase in `.htaccess`:
   ```apache
   RewriteBase /your-subdirectory/
   ```

## Base Path Configuration

If your app is deployed to a subdirectory (e.g., `/app/`), you need to:

1. Update `vite.config.js`:

   ```js
   export default defineConfig({
     base: '/app/',
     // ... rest of config
   });
   ```

2. Update React Router in `src/App.jsx`:

   ```jsx
   <Router basename="/app">{/* ... */}</Router>
   ```

3. Rebuild the application
