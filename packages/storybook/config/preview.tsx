import { useArgs } from '@storybook/preview-api';
import { Preview, StoryContext, StoryFn } from '@storybook/react';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import theme from './theme';
import './preview.scss';

import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/assets/icons/index.css';
import '@nl-rvo/assets/images/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import '@utrecht/component-library-css/dist/index.css';

// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#088008',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#3065ee',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#e0bc2e',
        color: '#000000',
        description:
          'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
      },
      'WORK IN PROGRESS': {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
      },
      HIDDEN: {
        background: '#cccccc',
        color: '#ffffff',
        description: 'Hidden from sidebar.',
      },
    },
  },
};

const parameters = {
  options: {
    storySort: {
      order: [
        'Introductie',
        'Aan de slag',
        'Huisstijl',
        ['Color', 'Font', 'Size', 'Space'],
        'Componenten',
        'Templates',
        "Demo pagina's",
        'Informatie',
        ['Toestemming voor gebruik', 'Open source licentie'],
      ],
    },
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  docs: {
    theme,
    source: {
      state: 'open',
      language: 'html',
      transform: (src, storyContext) => {
        // Ensure valid HTML in the Preview source
        let currentStoryArgs = storyContext.args;
        if (storyContext.originalStoryFn) {
          return prettier
            .format(ReactDOMServer.renderToStaticMarkup(storyContext.originalStoryFn(currentStoryArgs, storyContext)), {
              parser: 'babel',
              plugins: [prettierBabel],
            })
            .replace(/\{" "\}/gm, ' ')
            .replace(/(;)[^;]*$/g, '');
        }
        return src;
      },
    },
    page: () => <div>test</div>,
  },
  ...addonStatus,
  layout: 'centered',
  html: {
    root: '#storybook-root',
    removeEmptyComments: true,
  },
  themes: {
    default: 'RVO',
    target: 'root',
    list: [
      { name: 'RVO', class: 'rvo-theme', color: '#007bc7' },
      { name: 'RVO (Rijkshuisstijl)', class: 'rvo-rijkshuisstijl', color: '#007bc7' },
    ],
  },
};

const decorators = [
  // Add the updateArgs function to the component props
  (storyFn: StoryFn, context: StoryContext) => {
    const [, updateArgs] = useArgs();
    return storyFn({ ...context.args, updateArgs }, context);
  },
];

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
