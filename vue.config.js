// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@core': path.join(__dirname, 'core'),
      },
    },
  },
};