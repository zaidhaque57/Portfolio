/** @type {import('next').NextConfig} */
declare const process: { env: { NODE_ENV?: string } };

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Generates the static HTML/CSS/JS export in /out
  basePath: isProd ? '/Portfolio' : '', // Matches your repository name (case-sensitive)
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;