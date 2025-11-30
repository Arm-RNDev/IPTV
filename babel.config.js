module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-private-methods',
      {
        loose: true,
      },
    ],
    [
      'module-resolver',

      {
        root: ['./'],
        alias: {
          app: './app',
          '@screens': './app/screens',
          '@components': './app/components',
          '@assets': './app/assets',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],
    'react-native-worklets/plugin',
  ],
};
