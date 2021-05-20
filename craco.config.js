const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

module.exports = {
  eslint: {
    mode: 'file',
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: configPaths('./tsconfig.paths.json') },
    },
  ],
}
