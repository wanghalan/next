/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    // Ref: https://github.com/vercel/next.js/issues/19711
    images: {
        unoptimized: true,
        path: "https://wanghalan.github.io/next/images"
    }
  }


module.exports = nextConfig