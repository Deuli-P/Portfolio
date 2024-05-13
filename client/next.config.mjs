/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"http",
        hostname:'portfolio.pierre-antoniutti.fr',
        port:"",
      } 
    ]
  },
}
 
export default nextConfig;



// import withBundleAnalyzer from '@next/bundle-analyzer';

// const withAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePattern: [
//       {
//         protocole:"https",
//         hostname:'images.unsplash.com',
//         port:"",
//         pathname:""
//       },
//       {
//         protocole:"https",
//         hostname:'portfolio.pierre-antoniutti.fr',
//         port:"",
//         pathname:"",
//       } 
//     ]
//   },
// };

// export default withAnalyzer(nextConfig);