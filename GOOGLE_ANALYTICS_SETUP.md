# Google Analytics Setup Guide for KB Switches

## Steps to Complete the Setup

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Create account"
4. Choose "For a website" option
5. Enter your website details:
   - Website name: "KB Switches"
   - Website URL: "https://kbswitches.in"
   - Industry: "Technology/Electronics"
   - Time zone: "India Standard Time"

### 2. Get Your Measurement ID
1. After creating the account, you'll get a **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### 3. Update the Website
1. Open `/index.html` in your project
2. Find both instances of `GA_MEASUREMENT_ID` and replace with your actual ID
3. Open `/src/utils/analytics.js` and replace `GA_MEASUREMENT_ID` with your actual ID

### 4. Deploy Changes
```bash
npm run build
git add -A
git commit -m "Add Google Analytics with tracking ID"
git push origin main
```

## What's Already Set Up

### ✅ Automatic Tracking
- **Page views**: Automatically tracked when users visit pages
- **Phone calls**: Tracked when users click phone numbers
- **Catalog downloads**: Tracked when users download the PDF catalog
- **Quote requests**: Tracked when users click "Get Free Quote"
- **Video plays**: Tracked when users play the dealer review video
- **Product interest**: Can be extended to track product interactions

### ✅ Event Categories
- **Contact**: Phone calls, form submissions
- **Engagement**: Video plays, product views, scroll depth
- **Conversion**: Quote requests, lead generation
- **Downloads**: Catalog downloads, file interactions

### ✅ Custom Events Available
- `phone_call`: When users click phone numbers
- `file_download`: When users download files
- `lead_generation`: When users request quotes
- `form_submit`: When users submit contact forms
- `product_interest`: When users interact with products
- `video_play`: When users play videos
- `scroll_depth`: Can track how far users scroll

## Next Steps After Setup

1. **Verify Installation**: Use Google Analytics debugger or check Real-Time reports
2. **Set up Goals**: Create conversion goals for quote requests and phone calls
3. **Monitor Data**: Check analytics after 24-48 hours for initial data
4. **Add More Tracking**: Extend tracking to more user interactions as needed

## Privacy Compliance
- Consider adding a privacy policy mentioning Google Analytics
- The current setup is GDPR-friendly with no personal data collection
- All events track user behavior, not personal information

## Testing
After adding your Measurement ID, you can test by:
1. Opening browser developer tools
2. Going to Console tab
3. Checking for gtag events when clicking tracked buttons
4. Verifying in Google Analytics Real-Time reports