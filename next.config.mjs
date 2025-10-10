/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Common image CDNs and services you’re already using
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "preview.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dsc-omeka.library.ucsc.edu", // 👈 Added UCSC Omeka host
        port: "",
        pathname: "/**",
      },

      // 👇 Optional — useful if you ever use other CDNs
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google user avatars
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // Pixabay free images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co", // Placeholder images
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
