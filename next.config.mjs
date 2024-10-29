/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable or keep React strict mode if needed
    onDemandEntries: {
      websocketPort: 0, // This disables Fast Refresh (hot-reloading)
    },
  };
  
  export default nextConfig;
  
