const Alias = require('craco-alias');

module.exports = {
  eslint: {
    enable: false
  },
  plugins: [
    {
      plugin: Alias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.node.json'
      }
    }
  ]
};
