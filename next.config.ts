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
		unoptimized: true,
	},
	// Enable static exports for better performance
	trailingSlash: true,
	// Disable telemetry
	telemetry: false,
};

export default nextConfig;
