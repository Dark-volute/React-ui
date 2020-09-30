export default {
  esm: {
    type: 'rollup',
    file: 'index',
  },
  extractCSS: true,
  extraExternals: ['react', 'react-dom'],
};
