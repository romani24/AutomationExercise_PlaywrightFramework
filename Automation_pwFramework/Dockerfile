# ============================================
# Dockerfile for E2E Tests - Playwright + Cucumber
# ============================================

# Base image with Node.js and Playwright (browsers included)
FROM mcr.microsoft.com/playwright:v1.57.0-noble

# Image metadata
LABEL maintainer="QA Team"
LABEL description="E2E testing framework with Playwright and Cucumber"
LABEL version="1.0.0"

# Working directory
WORKDIR /app

# ============================================
# Environment variables
# ============================================
ENV HEADLESS=true
ENV CI=true
ENV NODE_ENV=test
# Avoid npm interactive prompts
ENV npm_config_loglevel=error

# ============================================
# Install dependencies (cached layer)
# ============================================
# Copy ONLY dependency files first
# This allows caching - only reinstalls if package.json changes
COPY package*.json ./

# Install production + required dev dependencies
RUN npm ci --ignore-scripts \
    && npm cache clean --force

# ============================================
# Copy source code
# ============================================
COPY src/ ./src/
COPY cucumber.json ./
COPY tsconfig.json ./

# ============================================
# Create folders for results
# ============================================
RUN mkdir -p test-results/screenshots test-results/json

# ============================================
# Security configuration
# ============================================
# Create non-root user for security
RUN groupadd -r testuser && useradd -r -g testuser testuser \
    && chown -R testuser:testuser /app

# Switch to non-root user
USER testuser

# ============================================
# Health check (optional)
# ============================================
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "console.log('Container healthy')" || exit 1

# ============================================
# Default command
# ============================================
CMD ["npm", "test"]
