import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};


export default nextConfig;


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/dv_repertorio_latest/' : '',
  basePath: isProd ? '/dv_repertorio_latest' : '',
};

