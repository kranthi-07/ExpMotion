import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  outputFileTracingIncludes: {
    '/api/download': ['./src/assets/**/*'],
    '/api/download-free': ['./src/assets/**/*'],
  },
};

export default nextConfig;
