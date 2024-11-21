/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';

export interface IRadioButtonProps extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label: string;
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked?: boolean;
  /** @uxpinpropname Show hover */
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  /** @uxpinpropname Has focus */
  focus?: boolean;
  /** @uxpinpropname Is invalid */
  invalid?: boolean;
  required?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
  /** @uxpinignoreprop */
  onUpdateGroup?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  label: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  invalid: { control: 'boolean' },
  required: { control: 'boolean' },
  onFocus: {
    table: {
      disable: true,
    },
  },
  onBlur: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onInvalid: {
    table: {
      disable: true,
    },
  },
  onUpdateGroup: {
    table: {
      disable: true,
    },
  },
};

export const RadioButton: React.FC<IRadioButtonProps> = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  label = defaultArgs.label,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  onChange,
  onUpdateGroup,
  ...otherProps
}: IRadioButtonProps) => (
  <label className="rvo-radio-button" htmlFor={id}>
    <input
      id={id}
      name={name}
      type="radio"
      checked={checked || undefined}
      disabled={disabled || undefined}
      required={required || undefined}
      className={clsx(
        'utrecht-radio-button',
        checked && 'utrecht-radio-button--checked',
        hover && 'rvo-radio-button--hover',
        disabled && 'utrecht-radio-button--disabled',
        active && 'utrecht-radio-button--active',
        focus && 'utrecht-radio-button--focus-visible',
        invalid && 'utrecht-radio-button--invalid',
        required && 'utrecht-radio-button--required',
      )}
      onChange={(event) => {
        onChange?.(event);
        onUpdateGroup?.(event);
      }}
      {...otherProps}
    />
    {label}
  </label>
);

export default RadioButton;
