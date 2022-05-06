/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack:true

}

module.exports = {
  webpack(config, options) {
    const { dev, isServer } = options
    const extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/style.css',
      disable: dev
    })
    config.module.rules.push({
      test: /\.css$/,
      use: cssLoaderConfig(extractCSSPlugin, {
        cssModules,
        dev,
        isServer
      })
    })
    config.options.con
    return config
  }
}

module.exports = nextConfig
