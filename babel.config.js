module.exports = api => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '~': './src',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
