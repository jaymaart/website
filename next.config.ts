import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'standalone',
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
	images: {
		unoptimized: false,
		domains: [],
		remotePatterns: [],
	},
	// Enable static exports for better performance
	trailingSlash: true,
	// Ensure public folder is properly served
	distDir: '.next',
};

export default nextConfig;
