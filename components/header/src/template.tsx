/**
 * @license CC0-1.0
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import { Logo } from '../../logo/src/template';
import './index.scss';

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  /** @uxpinignoreprop */
  link?: string;
  children?: ReactNode | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const argTypes = {
  title: {
    control: 'text',
  },
  subtitle: {
    control: 'text',
  },
  link: {
    control: 'text',
  },
  children: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};

export const Header: React.FC<IHeaderProps> = ({
  link = defaultArgs.link,
  title = defaultArgs.title,
  subtitle = defaultArgs.subtitle,
  children,
  onClick,
}: IHeaderProps) => (
  <header className={clsx('rvo-header')}>
    <div className="rvo-header__logo-wrapper" onClick={onClick}>
      {link ? (
        <a href={link} className="rvo-header__logo-link rvo-link rvo-link--no-underline">
          <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
        </a>
      ) : (
        <Logo className="rvo-header__logo-img" title={title} subtitle={subtitle} />
      )}
    </div>
    {children}
  </header>
);

export default Header;
