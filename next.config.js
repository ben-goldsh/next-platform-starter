/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    webpack: (config, { isServer }) => {
      config.devtool = 'source-map';
        if (isServer) {
          config.externals = config.externals || [];
          config.externals.push('hud-sdk');
        }
        return config;
    },
};

module.exports = nextConfig;
