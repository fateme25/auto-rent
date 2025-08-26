/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vogctgeqhxxkabzgxlzu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cars/**",
      },

      {
        protocol: "https",
        hostname: "vogctgeqhxxkabzgxlzu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/reservation/**",
      },
    ],
  },
};

export default nextConfig;
