module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['Chrome >= 52', 'FireFox >= 44', 'Safari >= 7', 'Explorer 11', 'last 4 Edge versions'],
      }
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './src',
          node_modules: './node_modules',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
