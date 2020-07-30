/* eslint-disable */
const fs = require('fs');
const chalk = require('chalk');

let enterModules = JSON.parse(process.env.npm_config_argv).original.splice(2)[0]; // 用户输入要打包的模块
enterModules = enterModules && enterModules.substr(2, enterModules.length - 3);
const allModules = fs.readdirSync('./src/modules'); // 所有模块
const existModules = enterModules ? allModules.filter(item => enterModules.split(',').indexOf(item) > -1) : []; // 用户输入的有效模块
const unExistModules = enterModules ? enterModules.split(',').filter(item => existModules.indexOf(item) < 0) : []; // 用户输入的不存在的模块
const entries = enterModules ? existModules : allModules; // 实际打包的模块

// 提示用户所输入的不存在的模块
if (unExistModules.length) {
  console.log(chalk.yellow(`—————————————— 模块 ${unExistModules.join(',')} 不存在，有效模块将会继续打包 ——————————————`));
}

const pages = {};
entries.forEach(entry => {
  if (entry.indexOf('.') !== 0) {
    pages[entry] = {
      entry: `src/modules/${entry}/main.js`,
      template: `src/modules/${entry}/${entry}.html`,
      filename: `${entry}.html`
    };
  }
});

module.exports = {
  // 参考配置https://cli.vuejs.org/config/#devserver-proxy
  // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: '8080',
    open: true,
    proxy: {
      '/api-': {
        target: 'https://www.shequzhangmen.com:446/',
        changeOrigin: true
      }
    }
  },
  pages
};
