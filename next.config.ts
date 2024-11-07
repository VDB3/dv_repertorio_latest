import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/dv_repertorio_latest/' : '',
  basePath: isProd ? '/dv_repertorio_latest' : ''
};

export default nextConfig;
