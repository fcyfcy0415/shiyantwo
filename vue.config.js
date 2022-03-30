// vue.config.js
const path = require('path');

module.exports = { 
  publicPath: './', 
  configureWebpack: { 
    resolve: { 
      alias: { 
        '@assets': path.join(__dirname, 'src/assets'),
        "@img": path.join(__dirname, 'src/assets/img'),
        '@core': path.join(__dirname, 'core'),
      }
    }
  }
}