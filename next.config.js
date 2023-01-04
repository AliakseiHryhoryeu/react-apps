const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	eslint: {
		dirs: ['.'],
	},
	poweredByHeader: false,
	trailingSlash: true,
	basePath: '',
	reactStrictMode: true,
})

module.exports = withImages()
