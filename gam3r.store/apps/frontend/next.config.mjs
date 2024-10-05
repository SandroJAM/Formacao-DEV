/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // hostname: "firebasestorage.googleapis.com",
                hostname: "**", // Preocupado com as imagens de origens distintas
            }
        ]
    }
};

export default nextConfig;
