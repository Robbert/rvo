// @ts-ignore
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { path2css } from '../helpers';

type BorderDesignTokensProps = {
  tokens: any;
};

export const BorderDesignTokens = ({ tokens }: BorderDesignTokensProps) => {
  return (
    <div className="design-tokens__container">
      {tokens.map(({ path, attributes, value, name }) => {
        return (
          <div className="design-tokens__row" key={name}>
            <div className="design-tokens__column design-tokens__column--20" style={{ maxWidth: '200px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: designTokens.rvoColorHemelblauw300,
                  height: '64px',
                  width: '64px',
                  borderEndEndRadius: value,
                }}
              />
            </div>
            <div className="design-tokens__column">
              <strong>{attributes.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}</strong>
              <div>{value}</div>
            </div>
            <code>{path2css(path)}</code>
          </div>
        );
      })}
    </div>
  );
};
