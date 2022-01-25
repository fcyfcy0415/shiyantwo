// vue.config.js
const path = require('path');

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@core': path.join(__dirname, 'core'),
//       },
//     },
//   },
// };
module.exports = { 
  publicPath: './', 
  configureWebpack: { 
    resolve: { 
      alias: { 
        'assets': '@/assets', 
        'common': '@/common', 
        'components': '@/components', 
        'network': '@/network', 
        'views': '@/views', 
        'plugins': '@/plugins',
        '@core': path.join(__dirname, 'core'),
      }
    }
  }
}