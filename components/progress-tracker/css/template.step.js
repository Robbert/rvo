/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import { Link } from '../../link/css/template';
import './index.scss';

export const argTypes = {
  state: {
    options: ['start', 'incomplete', 'doing', 'completed', 'disabled', 'end'],
    control: { type: 'radio' },
  },
  line: {
    options: ['none', 'straight', 'substep-start', 'substep-end'],
    control: { type: 'radio' },
  },
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
};

export const defaultArgs = {
  state: 'incomplete',
  line: 'none',
  size: 'medium',
  label: 'Step label',
  link: '#',
};

export const Step = ({
  state = defaultArgs.state,
  line = defaultArgs.line,
  size = defaultArgs.size,
  label = defaultArgs.label,
  link = defaultArgs.link,
}) => {
  let labelMarkup = label;
  switch (state) {
    case 'incomplete':
    case 'doing':
    case 'completed':
      labelMarkup = Link({
        linkContent: label,
        linkUrl: link,
        showIcon: false,
        classNames: ['rvo-progress-tracker__step-link'],
      });
      break;
  }

  return `<div class="${clsx(
    'rvo-progress-tracker__step',
    `rvo-progress-tracker__step--${line !== 'substep-start' ? size : 'md'}`,
    `rvo-progress-tracker__step--${state}`,
    line !== 'none' && `rvo-progress-tracker__step--${line}`,
  )}">${labelMarkup}</div>`;
};
