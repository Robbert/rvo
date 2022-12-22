/* eslint-env node */
const fs = require('fs');
const path = require('path');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }
    currDir = dir;
  }
}

module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
  ],
  features: {
    postcss: false,
    previewMdx2: true,
    buildStoriesJson: false,
  },
  framework: '@storybook/react',
  addons: [
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    'storybook-addon-themes',
  ],
  staticDirs: ['../../../proprietary/assets'],
  webpackFinal: async (config) => {
    const scssRule = config.module.rules.find((rule) => rule.test.toString().replace(/\\/g, '') === '/.s[ca]ss$/');
    scssRule.use = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];

    // Remove content has from assets to make them downloadable
    const svgRule = config.module.rules.find((rule) => rule.type === 'asset/resource');
    svgRule.generator.filename = svgRule.generator.filename.replace('.[contenthash:8]', '');

    return {
      ...config,
      performance: { hints: false },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    };
  },
};
