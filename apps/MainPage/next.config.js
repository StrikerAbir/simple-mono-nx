// apps/mainproject/next.config.js
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'MainPage',
        remotes: {
          SecondPage:
            'SecondPage@http://localhost:3001/_next/static/chunks/remoteEntry.js', // Ensure the URL matches where secondproject is running
        },
        shared: {},
        filename: 'static/chunks/remoteEntry.js',
      })
    );
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
