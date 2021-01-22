const path = require('path');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  roots: {
    source: 'app'
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [
      {
        test: /\.svelte$/,
        use: 'svelte-loader'
      }
    ],
    alias: {
      '@': path.resolve(__dirname, '../app/scripts')
    },
    extensions: ['.svelte']
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    cache: true
  }
  // More Config
};
