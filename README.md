# PM2 process start

```bash
# Start development environment
pm2 start ecosystem.config.js --only myapp-dev

# Start production environment  
pm2 start ecosystem.config.js --only myapp-prod

# Or start both
pm2 start ecosystem.config.js
```