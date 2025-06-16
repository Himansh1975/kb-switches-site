# KB Switches - Deployment Guide

## 🚀 Quick Deployment Steps

### Option 1: GitHub Actions (Recommended)
The repository is already set up for automatic deployment. Simply push your changes:

```bash
git push origin main
```

### Option 2: Manual Deployment from Windows
Since WSL has dependency issues with Rollup, deploy from Windows:

1. **Open Command Prompt or PowerShell in Windows**
2. **Navigate to project directory:**
   ```cmd
   cd D:\Desktop\data\kbswitches\React-KBswitches
   ```

3. **Install dependencies:**
   ```cmd
   npm install
   ```

4. **Build and deploy:**
   ```cmd
   npm run deploy
   ```

### Option 3: Deploy via GitHub Interface

1. Go to your GitHub repository
2. Click on **Actions** tab
3. Set up GitHub Pages workflow if not already configured

## 🔧 Current Configuration

- **Domain**: `kbswitches.in` (configured in CNAME)
- **Deploy Command**: `npm run deploy`
- **Build Tool**: Vite
- **Target**: GitHub Pages (`gh-pages` branch)

## 📝 Environment Details

- **Homepage**: https://kbswitches.in
- **Repository**: https://github.com/Himansh1975/kb-switches-site.git
- **Branch**: main → gh-pages (auto-deployment)

## ✅ Deployment Checklist

- [x] Code committed to main branch
- [x] CNAME file configured for custom domain
- [x] Package.json has correct homepage URL
- [x] All JSX syntax errors fixed
- [x] Responsive design optimized
- [ ] Build successful (pending dependency fix)
- [ ] Deploy to GitHub Pages

## 🐛 Known Issues

- **WSL Rollup Error**: `@rollup/rollup-linux-x64-gnu` missing
- **Solution**: Deploy from Windows environment instead

## 🔄 Continuous Deployment

Once successfully deployed, future changes will automatically deploy when you:
1. Make changes
2. Commit changes
3. Push to main branch

The GitHub Pages will automatically rebuild and deploy your site to `kbswitches.in`.