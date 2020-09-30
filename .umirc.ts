import { defineConfig } from 'dumi';
const path = require('path');
const resolve = (dir: any) => path.join(__dirname, dir);

export default defineConfig({
  title: 'sun-xui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  theme: {
    '@c-primary': '#1890ff',
  },
  navs: [
    {
      title: '文档',
      path: '/doc',
    },
    {
      title: '组件',
      path: '/components',
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },
});
