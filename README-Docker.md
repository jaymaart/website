# 🐳 Docker Deployment Guide for Portfolio Website

This guide will help you deploy your portfolio website using Docker with Nginx reverse proxy, SSL support, and Redis caching.

## 📋 Prerequisites

- Docker installed and running
- Docker Compose installed
- OpenSSL (for SSL certificate generation)
- Git (to clone your repository)

## 🚀 Quick Start

### 1. Clone and Navigate
```bash
git clone <your-repo-url>
cd website
```

### 2. Make the deployment script executable
```bash
chmod +x deploy.sh
```

### 3. Deploy with default settings
```bash
./deploy.sh
```

### 4. Deploy with custom domain
```bash
./deploy.sh yourdomain.com
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Internet      │    │   Nginx Proxy   │    │  Next.js App   │
│                 │────│   (Port 80/443) │────│  (Port 3000)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                └─────────────┐
                                              │
                                              ▼
                                       ┌─────────────────┐
                                       │     Redis       │
                                       │   (Port 6379)   │
                                       └─────────────────┘
```

## 📁 File Structure

```
.
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Service orchestration
├── deploy.sh                  # Automated deployment script
├── .dockerignore             # Docker build exclusions
├── next.config.ts            # Next.js configuration
├── nginx/
│   ├── nginx.conf            # Main Nginx configuration
│   └── conf.d/
│       └── default.conf      # Server block configuration
├── ssl/                      # SSL certificates (auto-generated)
├── logs/                     # Application and Nginx logs
└── redis/                    # Redis configuration
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in your project root:

```env
# Redis Configuration
REDIS_PASSWORD=your_secure_password_here

# Next.js Configuration
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Domain Configuration
DOMAIN=yourdomain.com
```

### SSL Certificates

The deployment script automatically generates self-signed certificates for development. For production:

1. Replace `ssl/cert.pem` and `ssl/key.pem` with your real certificates
2. Update the domain in `nginx/conf.d/default.conf`
3. Ensure your domain points to your server's IP address

## 🚀 Deployment Commands

### Start Services
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f portfolio
docker-compose logs -f nginx
docker-compose logs -f redis
```

### Restart Services
```bash
docker-compose restart
```

### Rebuild and Deploy
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🔧 Customization

### Change Ports

Edit `docker-compose.yml`:

```yaml
nginx:
  ports:
    - "8080:80"      # Change 80 to 8080
    - "8443:443"     # Change 443 to 8443
```

### Add Environment Variables

Edit `docker-compose.yml`:

```yaml
portfolio:
  environment:
    - NODE_ENV=production
    - NEXT_TELEMETRY_DISABLED=1
    - CUSTOM_VAR=value
```

### Modify Nginx Configuration

Edit `nginx/conf.d/default.conf` for custom routing, caching, or security rules.

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the port
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443

# Kill the process or change ports in docker-compose.yml
```

#### 2. Permission Denied
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
chmod +x deploy.sh
```

#### 3. SSL Certificate Issues
```bash
# Regenerate SSL certificates
rm -rf ssl/
./deploy.sh
```

#### 4. Container Won't Start
```bash
# Check container logs
docker-compose logs portfolio

# Check container status
docker-compose ps

# Restart containers
docker-compose restart
```

### Health Checks

Monitor service health:

```bash
# Check all services
docker-compose ps

# Check specific service logs
docker-compose logs portfolio
docker-compose logs nginx
docker-compose logs redis
```

### Performance Monitoring

```bash
# View resource usage
docker stats

# Check disk usage
docker system df
```

## 🔒 Security Considerations

### Production Deployment

1. **Use Real SSL Certificates**: Replace self-signed certificates with Let's Encrypt or commercial certificates
2. **Update Domain**: Change `localhost` to your actual domain in Nginx configuration
3. **Firewall**: Configure your server's firewall to only allow necessary ports
4. **Environment Variables**: Store sensitive data in environment variables, not in code
5. **Regular Updates**: Keep Docker images and dependencies updated

### Security Headers

The Nginx configuration includes security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security
- Content-Security-Policy

## 📊 Monitoring and Logging

### Log Locations

- **Application Logs**: `./logs/`
- **Nginx Logs**: `./logs/nginx/`
- **Container Logs**: `docker-compose logs`

### Performance Optimization

1. **Enable Gzip**: Already configured in Nginx
2. **Static Asset Caching**: Configured for 1 year
3. **Rate Limiting**: API endpoints are rate-limited
4. **Connection Pooling**: Nginx keeps connections alive

## 🔄 Updates and Maintenance

### Update Application

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Update Dependencies

```bash
# Update package.json dependencies
npm update

# Rebuild container
docker-compose build --no-cache portfolio
docker-compose up -d
```

### Backup and Restore

```bash
# Backup Redis data
docker run --rm -v portfolio_redis_data:/data -v $(pwd):/backup alpine tar czf /backup/redis-backup.tar.gz -C /data .

# Restore Redis data
docker run --rm -v portfolio_redis_data:/data -v $(pwd):/backup alpine tar xzf /backup/redis-backup.tar.gz -C /data
```

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review container logs: `docker-compose logs`
3. Ensure all prerequisites are met
4. Check file permissions and ownership
5. Verify Docker and Docker Compose versions

---

**Happy Deploying! 🚀**
