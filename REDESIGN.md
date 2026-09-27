# KB Switches redesign

The homepage is implemented in `index.html`, `styles.css` and `script.js`. Its media and brochures are in `public/Assets`. The existing Vite build, dependency lockfile, GitHub Pages workflow and `public/CNAME` are retained.

Run `npm ci`, then `npm run dev` to preview or `npm run build` for production. A push to `main` deploys to kbswitches.in through the existing workflow. Deployment is triggered by publishing this redesign to main.

Before publishing, confirm the visitor address (the supplied brochure lists two), contact details and permission to publish the supplied distributor videos. No quotes or names have been invented. Enquiries open WhatsApp for the visitor to review and send; the site does not store form entries.

The checkout step fetches Git LFS files because this repository tracks PDFs with LFS. New brochures must be committed using Git LFS, consistent with `.gitattributes`.

