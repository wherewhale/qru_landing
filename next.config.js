/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// module.exports = {
//   // Prefer loading of ES Modules over CommonJS
//   experimental: { esmExternals: true },
// };

module.exports = {
  poweredByHeader: process.env.NODE_ENV === 'development',
};

module.exports = nextConfig;
