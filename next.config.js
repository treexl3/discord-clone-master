/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

    return config;
  },
  images: {
    domains: [
      "uploadthing.com"
    ]
  }
}

module.exports = nextConfig
