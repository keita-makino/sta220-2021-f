// eslint-disable-next-line @typescript-eslint/no-var-requires
const hotLodaer = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = hotLodaer(config, env);

  config.module.rules = [
    ...config.module.rules,
    {
      test: /react-spring/,
      sideEffects: true,
    },
  ];

  return config;
};
