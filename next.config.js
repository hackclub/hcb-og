/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@': path.join(__dirname, 'src')
    }
  }
}
