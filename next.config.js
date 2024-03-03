/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    domains: ["localhost" , "*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io" ,
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;


// module.exports = {
//   distDir: 'build', // Change 'build' to the desired output directory
// }