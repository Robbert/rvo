/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { defaultArgs } from './defaultArgs';
import Button from '../button/template';
import { Icon } from '../icon/template';
import MenuBarItem from '../menubar/menubar-item/template';
import { IMenuBarItem } from '../menubar/template';
import './index.scss';

export interface IMobileMenuBarProps {
  size?: 'sm' | 'md' | 'lg';
  items?: IMenuBarItem[];
  useIcons?: boolean;
  iconPlacement?: 'before' | 'after';
  deltaForActiveItem?: boolean;
  children?: React.ReactNode;
  submenuItems?: IMenuBarItem[];
  isOpen?: boolean;
  horizontalRule?: boolean;
}

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
  submenuItems: {
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
  isOpen: {
    control: 'boolean',
  },
};

export const MobileMenuBar: React.FC<IMobileMenuBarProps> = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
  submenuItems = defaultArgs.submenuItems,
  isOpen: isOpenArg = defaultArgs.isOpen,
  deltaForActiveItem = defaultArgs.deltaForActiveItem,
  horizontalRule = defaultArgs.horizontalRule,
  children,
}: IMobileMenuBarProps) => {
  let itemsMarkup;
  if (!children && items) {
    itemsMarkup = items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <MenuBarItem
            key={`${item.label}--${index}`}
            label={item.label}
            icon={item.icon}
            active={item.active}
            link={item.link}
            useIcons={useIcons}
            size={size}
            iconPlacement={iconPlacement}
            deltaForActiveItem={deltaForActiveItem}
            useDivider={item.useDivider}
          />

          {item.active &&
            submenuItems &&
            submenuItems.map((submenuItem, index) => (
              <React.Fragment key={index}>
                <MenuBarItem
                  key={`${submenuItem.label}--${index}`}
                  label={submenuItem.label}
                  icon={submenuItem.icon}
                  active={undefined}
                  link={submenuItem.link}
                  useIcons={useIcons}
                  size={size}
                  iconPlacement={iconPlacement}
                  type="sub"
                  deltaForActiveItem={deltaForActiveItem}
                  useDivider={item.useDivider}
                />
              </React.Fragment>
            ))}
        </React.Fragment>
      );
    });
  } else {
    itemsMarkup = children;
  }

  const [isOpen, setIsOpen] = useState(isOpenArg);
  const onClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(isOpenArg);
  }, [isOpenArg]);

  return (
    <div
      className={clsx(
        'rvo-mobile-menu',
        `rvo-mobile-menu--${size}`,
        `rvo-mobile-menu--${isOpen ? 'open' : 'closed'}`,
        horizontalRule && 'rvo-mobile-menu--horizontal-rule',
      )}
      aria-expanded={isOpen}
    >
      <Button kind="subtle" className={clsx('rvo-mobile-menu__toggle')} onClick={onClick}>
        <Icon icon="menu" size={size as any} className="rvo-mobile-menu__open-icon" />
        Menu
      </Button>
      {isOpen && (
        <div className={clsx('rvo-topnav__background')} onClick={onClick}>
          <nav className={clsx(`rvo-topnav rvo-topnav--${size}`)} onClick={(e) => e.stopPropagation()}>
            <Icon icon="kruis" size={size as any} className="rvo-mobile-menu__close-icon" onClick={onClick} />
            <ul className={clsx('rvo-topnav__list', 'rvo-topnav__list--vertical')}>{itemsMarkup}</ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenuBar;
