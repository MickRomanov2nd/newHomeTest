module.exports = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.jsx'],
        alias: {
          '^@common/(.+)': './src/common/\\1',
          '^@features/(.+)': './src/features/\\1',
          '^@pages/(.+)': './src/pages/\\1',
          '^@store/(.+)': './src/store/\\1',
          '^@src/(.+)': './src/\\1',
          '^@packageSrc': './package.json',
        },
      },
    ],
  ],
};
