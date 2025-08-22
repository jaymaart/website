#!/bin/bash

# Portfolio Deployment Script
# This script automates the deployment of your portfolio website using Docker

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
COMPOSE_FILE="docker-compose.yml"
PROJECT_NAME="portfolio"
DOMAIN=${1:-"localhost"}

echo -e "${BLUE}🚀 Starting Portfolio Deployment${NC}"
echo -e "${BLUE}Domain: ${DOMAIN}${NC}"
echo ""

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    print_status "Docker is running"
}

# Check if Docker Compose is available
check_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install it and try again."
        exit 1
    fi
    print_status "Docker Compose is available"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p nginx/conf.d
    mkdir -p ssl
    mkdir -p logs/nginx
    mkdir -p redis
    
    print_status "Directories created successfully"
}

# Generate self-signed SSL certificate for development
generate_ssl_cert() {
    if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
        print_warning "SSL certificates not found. Generating self-signed certificates..."
        
        # Create SSL directory if it doesn't exist
        mkdir -p ssl
        
        # Generate self-signed certificate
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout ssl/key.pem \
            -out ssl/cert.pem \
            -subj "/C=US/ST=State/L=City/O=Organization/CN=${DOMAIN}"
        
        print_status "Self-signed SSL certificates generated"
    else
        print_status "SSL certificates found"
    fi
}

# Stop and remove existing containers
cleanup_existing() {
    print_status "Cleaning up existing containers..."
    
    docker-compose -f ${COMPOSE_FILE} down --remove-orphans 2>/dev/null || true
    docker system prune -f 2>/dev/null || true
    
    print_status "Cleanup completed"
}

# Build and start services
deploy_services() {
    print_status "Building and starting services..."
    
    # Build the portfolio image
    docker-compose -f ${COMPOSE_FILE} build --no-cache portfolio
    
    # Start all services
    docker-compose -f ${COMPOSE_FILE} up -d
    
    print_status "Services started successfully"
}

# Wait for services to be healthy
wait_for_health() {
    print_status "Waiting for services to be healthy..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if docker-compose -f ${COMPOSE_FILE} ps | grep -q "healthy"; then
            print_status "All services are healthy!"
            return 0
        fi
        
        echo -n "."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    print_warning "Some services may not be fully healthy yet"
    return 1
}

# Show deployment status
show_status() {
    print_status "Deployment completed! Here's the status:"
    echo ""
    
    docker-compose -f ${COMPOSE_FILE} ps
    echo ""
    
    print_status "Your portfolio is now accessible at:"
    echo -e "${BLUE}  HTTP:  http://${DOMAIN}${NC}"
    echo -e "${BLUE}  HTTPS: https://${DOMAIN}${NC}"
    echo ""
    
    print_status "Useful commands:"
    echo -e "${BLUE}  View logs:     docker-compose logs -f${NC}"
    echo -e "${BLUE}  Stop services: docker-compose down${NC}"
    echo -e "${BLUE}  Restart:       docker-compose restart${NC}"
    echo ""
}

# Main deployment function
main() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}    Portfolio Deployment${NC}"
    echo -e "${BLUE}================================${NC}"
    echo ""
    
    # Run deployment steps
    check_docker
    check_docker_compose
    create_directories
    generate_ssl_cert
    cleanup_existing
    deploy_services
    wait_for_health
    show_status
    
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
}

# Run main function
main "$@"
