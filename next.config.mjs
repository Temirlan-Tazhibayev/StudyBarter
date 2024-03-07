/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Устанавливает строгий режим React для лучшей оптимизации и предотвращения некоторых типов ошибок
  images: {
    domains: ['localhost'], // Список доменов, с которых вы хотите загружать изображения
  },
};

export default nextConfig;
