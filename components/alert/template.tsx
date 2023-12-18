/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Button } from '../button/template';
import { Icon } from '../icon/template';
import { StatusIcon } from '../status-icon/template';
import parseContentMarkup from '../utils/parseContentMarkup';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IAlertProps {
  kind?: 'info' | 'warning' | 'error' | 'success';
  heading?: string;
  /** @uxpinignoreprop */
  content?: string | React.ReactNode;
  closable?: boolean;
  condensed?: boolean;
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  kind: {
    options: ['info', 'warning', 'error', 'success'],
    control: { type: 'radio' },
  },
  heading: {
    control: 'text',
  },
  content: {
    control: 'text',
  },
  closable: {
    control: 'boolean',
  },
  condensed: {
    control: 'boolean',
  },
};

export const Alert: React.FC<IAlertProps> = ({
  kind = defaultArgs.kind,
  heading = defaultArgs.heading,
  content = defaultArgs.content,
  closable = defaultArgs.closable,
  condensed = defaultArgs.condensed,
  children,
}: IAlertProps) => {
  let iconMarkup;
  switch (kind) {
    case 'info':
      iconMarkup = StatusIcon({ type: 'info', size: 'xl' });
      break;
    case 'warning':
      iconMarkup = StatusIcon({ type: 'waarschuwing', size: 'xl' });
      break;
    case 'error':
      iconMarkup = StatusIcon({ type: 'foutmelding', size: 'xl' });
      break;
    case 'success':
      iconMarkup = StatusIcon({ type: 'bevestiging', size: 'xl' });
      break;
  }

  // Parse content markup (either a string, HTML string, React node or children)
  let contentMarkup: string | React.ReactNode = parseContentMarkup(children || content);

  return (
    <div className={clsx('rvo-alert', `rvo-alert--${kind}`, condensed && 'rvo-alert--condensed')}>
      {iconMarkup}
      <div className="rvo-alert-text">
        {heading && heading !== '' && <strong>{heading}</strong>}
        <div>{contentMarkup}</div>
      </div>
      {closable && (
        <Button
          kind="subtle"
          className="rvo-button__close"
          label={<Icon icon="kruis" size="md" />}
          aria-label="Sluiten"
        />
      )}
    </div>
  );
};

export const AllAlertKinds: React.FC<IAlertProps> = (alertArgs) => (
  <div className="rvo-layout-column rvo-layout-gap--md">
    <Alert {...alertArgs} kind="info" />
    <Alert {...alertArgs} kind="warning" />
    <Alert {...alertArgs} kind="error" />
    <Alert {...alertArgs} kind="success" />
  </div>
);

export default Alert;
