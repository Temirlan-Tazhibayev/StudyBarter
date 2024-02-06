/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config.js');
// const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  
};

export default nextConfig;
