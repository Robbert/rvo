/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import { Icon, options as iconOptions } from '../../icon/src/template';
import { IconType } from '../../icon/src/types';
import './index.scss';
import parseContentMarkup from '../../utils/parseContentMarkup';

export interface IToggleProps {
  /** @uxpinignoreprop */
  content: string;
  showIcon?: 'no' | 'before' | 'after';
  icon?: IconType;
  showHover?: boolean;
  active?: boolean;
  focus?: boolean;
  className?: string;
  link?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
  /** @uxpinpropname On Toggle */
  onToggle?: (isActive: boolean) => void;
}

export const argTypes = {
  content: {
    control: 'text',
  },
  showIcon: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
  icon: {
    control: { type: 'select' },
    options: iconOptions,
  },
  showHover: {
    control: 'boolean',
  },
  active: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  link: {
    control: 'text',
  },
  linkTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
  onToggle: {
    table: {
      disable: true,
    },
  },
};

export const Toggle: React.FC<IToggleProps> = ({
  content = defaultArgs.content,
  showIcon = defaultArgs.showIcon,
  icon = defaultArgs.icon,
  active = defaultArgs.active,
  showHover = defaultArgs.showHover,
  focus = defaultArgs.focus,
  className,
  link,
  linkTarget = '_self',
  onToggle,
  children,
}: IToggleProps) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleToggleClick = () => {
    setIsActive((prevActive) => !prevActive);
    if (onToggle) {
      onToggle(!isActive);
    }
  };

  // Parse icon markup
  let iconClassName = '';
  if (showIcon === 'before') {
    iconClassName += 'rvo-link__icon--before';
  }
  if (showIcon === 'after') {
    iconClassName += ' rvo-link__icon--after';
  }

  const iconMarkup = Icon({ icon: icon as any, size: 'lg', color: '', className: iconClassName });
  const ToggleElement = link ? 'a' : 'div';

  return (
    <ToggleElement
      onClick={handleToggleClick}
      {...(link ? { href: link } : {})}
      target={linkTarget}
      className={clsx('rvo-toggle', 'rvo-toggle--default', className, showIcon !== 'no' && ['rvo-toggle--with-icon'], {
        'rvo-toggle--active': isActive,
        'rvo-toggle--show-hover': showHover,
        'rvo-toggle--focus': focus,
        'rvo-toggle--hover': link,
      })}
    >
      {showIcon === 'before' && iconMarkup}
      {parseContentMarkup(children || content)}
      {showIcon === 'after' && iconMarkup}
    </ToggleElement>
  );
};

export default Toggle;
