/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import React from 'react';
import LayoutFlow from '../layout-flow/template';
import './index.scss';

const BorderedBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ border: 'solid 1px var(--rvo-color-grijs-200)' }}>{children}</div>
);

export const PaddingHelpers: React.FC = () => {
  return (
    <LayoutFlow className="rvo-padding-sm">
      <LayoutFlow>
        <p>De volgende helperklassen kunnen optioneel worden gebruikt voor paddings aan alle kanten:</p>
        <BorderedBox>
          <div className="rvo-padding-2xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-2xs</strong>: Box met 2xs padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-xs" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-xs</strong>: Box met xs padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-sm" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-sm</strong>: Box met sm padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-md</strong>: Box met md padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-lg" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-lg</strong>: Box met lg padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-xl</strong>: Box met xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-2xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-2xl</strong>: Box met 2xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-3xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-3xl</strong>: Box met 3xl padding aan alle kanten
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-4xl" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-4xl</strong>: Box met 4xl padding aan alle kanten
          </div>
        </BorderedBox>
      </LayoutFlow>
      <LayoutFlow>
        <p>
          De volgende helperklassen kunnen optioneel worden gebruikt voor paddings in sizes 3xs, 2xs, xs, sm, md, lg,
          xl, 2xl en 3xl aan een kant:
        </p>
        <BorderedBox>
          <div className="rvo-padding-inline-start-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-inline-start-md</strong>: Box met md padding aan de linkerkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-inline-end-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-inline-end-md</strong>: Box met md padding aan de rechterkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-block-start-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-block-start-md</strong>: Box met md padding aan de bovenkant
          </div>
        </BorderedBox>
        <BorderedBox>
          <div className="rvo-padding-block-end-md" style={{ backgroundColor: 'var(--rvo-color-grijs-200)' }}>
            <strong>rvo-padding-block-end-md</strong>: Box met md padding aan de onderkant
          </div>
        </BorderedBox>
      </LayoutFlow>
    </LayoutFlow>
  );
};

export default PaddingHelpers;
