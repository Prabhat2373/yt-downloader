// // /** @type {import('next').NextConfig} */

// // import withPWA from "next-pwa";

// // const withPWAConfig = withPWA({
// //   pwa: {
// //     dest: 'public',
// //     swSrc: 'service-worker.js',
// //     disable: process.env.NODE_ENV === 'development',
// //   },
// //   reactStrictMode: true,
// // });

// // const nextConfig = {
// //   typescript: {
// //     // !! WARN !!
// //     // Dangerously allow production builds to successfully complete even if
// //     // your project has type errors.
// //     // !! WARN !!
// //     ignoreBuildErrors: true,
// //   },
// // withPWA:withPWAConfig
// // };


// // export default nextConfig;
// // Configuration options for Next.js
// /** @type {import('next').NextConfig} */


// const nextConfig = {
//   reactStrictMode: true, // Enable React strict mode for improved error handling
//   swcMinify: true,      // Enable SWC minification for improved performance
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
//   },
//     typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// };

// // Configuration object tells the next-pwa plugin 
// const withPWA = require("next-pwa")({
//   dest: "public", // Destination directory for the PWA files
//   // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   register: true, // Register the PWA service worker
//   skipWaiting: true, // Skip waiting for service worker activation

// });

// // Export the combined configuration for Next.js with PWA support
// module.exports = withPWA(nextConfig);


/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.BUILD_DIR || '.next',
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
