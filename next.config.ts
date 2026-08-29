import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  experimental: {
    outputFileTracingIncludes: {
      '/api/download': ['./src/assets/**/*'],
    },
  },
};

export default nextConfig;
