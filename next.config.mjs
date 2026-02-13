/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export', // Enable static export for GitHub Pages
	images: {
		unoptimized: true, // Required for static export
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;
