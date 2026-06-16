const nextConfig = {
  // Static HTML export (replaces the standalone `next export` command).
  output: "export",
  // Required for next/image in a static export — no Image Optimization server.
  images: { unoptimized: true },
  transpilePackages: ["react-tweet"]
};

module.exports = nextConfig;
