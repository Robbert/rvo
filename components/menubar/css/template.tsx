/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../icon/css/template';

interface IMenuBarItem {
  label: string;
  icon?: string;
  link: string;
  align?: string;
  active?: boolean;
}

interface IMenuBarProps {
  size: string;
  items: IMenuBarItem[];
  useIcons: boolean;
  iconPlacement: string;
  menuMaxWidth?: string;
  type?: 'primary' | 'sub' | 'sub-grid';
}

const defaultItems = [
  { label: 'Home', icon: 'home', link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie', link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
];

export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
  menuMaxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'sub', 'sub-grid'],
    control: { type: 'radio' },
  },
};

export const defaultArgs: IMenuBarProps = {
  size: 'md',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
  menuMaxWidth: 'none',
  type: 'primary',
};

const parseMenuItem = ({
  label,
  icon,
  active,
  useIcon = defaultArgs.useIcons,
  size = defaultArgs.size,
  iconPlacement = defaultArgs.iconPlacement,
}) => {
  // Parse delta for active menu items
  let deltaMarkup;
  if (active !== undefined) {
    deltaMarkup = <Icon icon={active ? 'delta_omlaag' : 'delta_omhoog'} size="xs" />;
  }

  if (useIcon && icon) {
    const iconMarkup = <Icon icon={icon} size={size} />;

    if (iconPlacement === 'before') {
      return (
        <>
          {iconMarkup}
          {label}
          {deltaMarkup}
        </>
      );
    } else {
      return (
        <>
          {label}
          {iconMarkup}
          {deltaMarkup}
        </>
      );
    }
  }
  return (
    <>
      {label}
      {deltaMarkup}
    </>
  );
};

export const MenuBar: React.FC<IMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  menuMaxWidth = defaultArgs.menuMaxWidth,
  type = defaultArgs.type,
}) => {
  const leftItemsMarkup = items
    .filter((item) => item.align !== 'right')
    .map((item, index) => (
      <li key={index} className={clsx('utrecht-topnav__item', item.active && 'utrecht-topnav__item--active')}>
        <a className="utrecht-topnav__link rvo-layout-row rvo-layout-gap--sm" href={item.link}>
          {parseMenuItem({
            label: item.label,
            icon: item.icon,
            active: item.active,
            useIcon: useIcons,
            size,
            iconPlacement,
          })}
        </a>
      </li>
    ));
  const rightItemsMarkup = items
    .filter((item) => item.align === 'right')
    .map((item, index) => (
      <li
        key={index}
        className={clsx(
          'utrecht-topnav__item',
          type === 'primary' && item.active && 'utrecht-topnav__item--active',
          index === 0 && 'utrecht-topnav__item--align-right',
        )}
      >
        <a className="utrecht-topnav__link rvo-layout-row rvo-layout-gap--sm" href={item.link}>
          {parseMenuItem({
            label: item.label,
            icon: item.icon,
            active: item.active,
            useIcon: useIcons,
            size,
            iconPlacement,
          })}
        </a>
      </li>
    ));

  return (
    <div
      className={clsx(
        'rvo-topnav__background',
        type === 'sub' && 'rvo-topnav--sub',
        type === 'sub-grid' && ['rvo-topnav--sub', 'rvo-topnav--sub-grid'],
      )}
    >
      <nav
        className={clsx(
          `rvo-topnav rvo-topnav--${size}`,
          menuMaxWidth && menuMaxWidth !== 'none' && 'rvo-max-width-layout',
          menuMaxWidth && menuMaxWidth !== 'none' && `rvo-max-width-layout--${menuMaxWidth}`,
        )}
      >
        <ul className="utrecht-topnav__list">
          {leftItemsMarkup}
          {rightItemsMarkup}
        </ul>
      </nav>
    </div>
  );
};

export const MenuBarWithSubmenu: React.FC<{ primary: IMenuBarProps; sub: IMenuBarProps }> = ({ primary, sub }) => (
  <div>
    <MenuBar {...primary} />
    <MenuBar {...sub} />
  </div>
);
