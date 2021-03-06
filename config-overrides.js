const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireTypescript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config = rewireTypescript(config, env);
  return config;
};