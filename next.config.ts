import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `npm run build` = normal Next.js server build (.next/), for real Node.js
  // hosting or `npm run start`/`next dev` locally.
  // `npm run build:static` = static export (out/, out/index.html as the entry
  // point) for static-only hosts like InfinityFree that can't run a Node server.
  ...(process.env.BUILD_TARGET === "export" ? { output: "export" as const } : {}),
};

export default nextConfig;
