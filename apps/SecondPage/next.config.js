// apps/secondproject/next.config.js
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'SecondPage',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Index': './pages/index',
        },
        shared: {},
      })
    );
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
