/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
import '../../layout-flow/src/index.scss';

export interface IGridProps {
  gap?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  columns?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
  layout?: '1fr' | '2fr1fr' | '1fr2fr';
  /** @uxpinpropname Content */
  children?: ReactNode | undefined;
}

export const argTypes = {
  gap: {
    options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: { type: 'radio' },
  },
  columns: {
    options: ['one', 'two', 'three', 'four', 'five', 'six'],
    control: { type: 'radio' },
  },
  layout: {
    options: ['1fr', '2fr1fr', '1fr2fr'],
    control: { type: 'radio' },
  },
  children: {
    table: {
      disable: true,
    },
  },
};

export const Grid: React.FC<IGridProps> = ({
  gap = defaultArgs.gap,
  columns = defaultArgs.columns,
  layout = defaultArgs.layout,
  children,
}: IGridProps) => {
  return (
    <div className="rvo-layout-grid-container">
      <div
        className={clsx(
          'rvo-layout-grid',
          `rvo-layout-gap--${gap}`,
          `rvo-layout-grid-columns--${columns}`,
          `rvo-layout-grid-layout--${layout}`,
        )}
      >
        {children || (
          <>
            <div>Element A</div>
            <div>Element B</div>
            <div>Element C</div>
            <div>Element D</div>
            <div>Element E</div>
            <div>Element F</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Grid;
