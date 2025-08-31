import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity:
      false /* Hides the "N" dev button in bottom-left corner during `npm run dev` */,
  },
};

module.exports = nextConfig; /* Required by Next.js to load the config file */
export default nextConfig;
