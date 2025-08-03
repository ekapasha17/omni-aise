# Git Workflow Guide

## 🌿 **Branching Strategy**

This project follows **Git Flow** branching model:

### **Branch Types:**

1. **`master`** - Production-ready code
   - Only stable, tested code
   - Protected branch (no direct commits)
   - Tagged releases

2. **`develop`** - Integration branch
   - Latest development changes
   - Where feature branches merge
   - Pre-production testing

3. **`feature/*`** - Feature development
   - New features or enhancements
   - Branch from `develop`
   - Merge back to `develop`

4. **`hotfix/*`** - Emergency fixes
   - Critical bug fixes for production
   - Branch from `master`
   - Merge to both `master` and `develop`

5. **`release/*`** - Release preparation
   - Final testing before production
   - Branch from `develop`
   - Merge to `master` and `develop`

## 🔄 **Workflow Commands**

### **Starting a New Feature**
```bash
# Switch to develop and pull latest
git checkout develop
git pull origin develop

# Create new feature branch
git checkout -b feature/user-authentication

# Work on your feature...
git add .
git commit -m "feat: add user login functionality"

# Push feature branch
git push -u origin feature/user-authentication
```

### **Completing a Feature**
```bash
# Switch to develop and pull latest
git checkout develop
git pull origin develop

# Merge feature branch
git merge feature/user-authentication

# Push develop
git push origin develop

# Delete feature branch (optional)
git branch -d feature/user-authentication
git push origin --delete feature/user-authentication
```

### **Creating a Release**
```bash
# Create release branch from develop
git checkout develop
git checkout -b release/v1.0.0

# Final testing and bug fixes...
git commit -m "chore: prepare v1.0.0 release"

# Merge to master
git checkout master
git merge release/v1.0.0
git tag v1.0.0
git push origin master --tags

# Merge back to develop
git checkout develop
git merge release/v1.0.0
git push origin develop

# Delete release branch
git branch -d release/v1.0.0
```

### **Emergency Hotfix**
```bash
# Create hotfix from master
git checkout master
git checkout -b hotfix/critical-security-fix

# Fix the issue...
git commit -m "fix: resolve critical security vulnerability"

# Merge to master
git checkout master
git merge hotfix/critical-security-fix
git tag v1.0.1
git push origin master --tags

# Merge to develop
git checkout develop
git merge hotfix/critical-security-fix
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-security-fix
```

## 📝 **Commit Message Conventions**

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code change that neither fixes a bug nor adds a feature
- `test:` - Adding missing tests
- `chore:` - Maintaining dependencies, build tasks, etc.

## 🛡️ **Branch Protection Rules**

### **Master Branch:**
- Require pull request reviews
- Require status checks to pass
- Restrict pushes to master
- Include administrators in restrictions

### **Develop Branch:**
- Require pull request reviews (optional)
- Allow merge commits
- Delete head branches after merge

## 🚀 **GitHub Setup**

### **1. Create Repository on GitHub**
1. Go to GitHub.com
2. Click "New repository"
3. Name: `laravel-aise`
4. Description: "Laravel 11 + Inertia.js + React + Tailwind CSS"
5. Make it public/private as needed
6. Don't initialize with README (we already have code)

### **2. Connect Local to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/laravel-aise.git
git push -u origin master
git push -u origin develop
```

### **3. Set Branch Protection (GitHub Web)**
1. Go to repository → Settings → Branches
2. Add rule for `master` branch
3. Enable "Require pull request reviews"
4. Enable "Restrict pushes to matching branches"

## 📋 **Quick Reference**

### **Daily Workflow:**
```bash
# Start work
git checkout develop
git pull origin develop
git checkout -b feature/my-new-feature

# During work
git add .
git commit -m "feat: implement user profile page"
git push origin feature/my-new-feature

# Finish work (via GitHub PR or locally)
git checkout develop
git pull origin develop
git merge feature/my-new-feature
git push origin develop
git branch -d feature/my-new-feature
```

### **Check Status:**
```bash
git status                 # Check working directory
git branch                 # List local branches
git branch -r             # List remote branches
git log --oneline         # View commit history
```

## 🎯 **Laravel Project Specific Features**

### **Common Feature Branches:**
- `feature/authentication` - User login/register system
- `feature/user-profile` - User profile management
- `feature/api-endpoints` - REST API development
- `feature/admin-panel` - Admin dashboard
- `feature/email-system` - Email notifications
- `feature/payment-integration` - Payment processing

### **Laravel-Specific Commands:**
```bash
# Before switching branches - clear caches
php artisan config:clear
php artisan cache:clear
php artisan view:clear

# After pulling changes - update dependencies
composer install
npm install

# Run migrations if database changes
php artisan migrate

# Rebuild assets
npm run build
```

## 🚨 **Important Git Setup Commands**

### **Initial Repository Setup:**
```bash
# Check if Git is initialized
git status

# If not initialized, run:
git init

# Create proper .gitignore for Laravel
# (See LARAVEL_GITIGNORE.md for complete file)

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Laravel 11 + Inertia.js + React + Tailwind CSS + MySQL setup"

# Create develop branch
git checkout -b develop

# Create master branch  
git checkout -b master

# Switch to develop for active development
git checkout develop
```

### **Connect to GitHub:**
```bash
# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/laravel-aise.git

# Push master
git checkout master
git push -u origin master

# Push develop
git checkout develop  
git push -u origin develop

# Verify setup
git remote -v
git branch -a
```

## 📁 **Project Structure for Git**

```
laravel-aise/
├── .git/                    # Git repository data
├── .gitignore              # Files to ignore
├── GIT_WORKFLOW.md         # This file
├── SETUP_GUIDE.md          # Complete setup guide
├── FIXES_APPLIED.md        # Issues and solutions
├── DATABASE_SETUP.md       # Database configuration
├── PROJECT_SUMMARY.md      # Project overview
├── app/                    # Laravel application
├── resources/              # Frontend assets
├── public/                 # Public web files
├── .env                    # Environment config (ignored)
└── ...                     # Other Laravel files
```

## 🎯 **Next Steps**

1. **Push to GitHub** - Follow setup commands above
2. **Create first feature** - Start with `feature/authentication`
3. **Set up CI/CD** - GitHub Actions for testing
4. **Configure branch protection** - Protect master branch
5. **Create pull request templates** - Standardize PR process

## 🔧 **Troubleshooting**

### **Common Issues:**

**Issue: Git not initialized**
```bash
git init
```

**Issue: Remote already exists**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/laravel-aise.git
```

**Issue: Branch conflicts**
```bash
git status
git stash
git checkout develop
git pull origin develop
git stash pop
```

**Issue: .env file committed accidentally**
```bash
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "fix: remove .env from tracking and update .gitignore"
```

Happy coding with Git! 🎉
