import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/ophef",
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://groningen.groenlinkspvda.nl",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
