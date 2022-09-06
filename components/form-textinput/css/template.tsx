/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';
import React from 'react';

export interface ITextInputProps {
  id?: string;
  disabled?: boolean;
  focus?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  inputType?: string;
  placeholder?: string;
  value?: string;
  valueType?: string;
}

export const argTypes = {
  id: { control: 'text' },
  disabled: {
    control: 'boolean',
  },
  focus: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  readOnly: {
    control: 'boolean',
  },
  required: {
    control: 'boolean',
  },
  inputType: {
    options: ['text', 'textarea'],
    control: { type: 'radio' },
  },
  placeholder: {
    control: 'text',
  },
  value: {
    control: 'text',
  },
  valueType: { options: ['text', 'number', 'currency'], control: { type: 'radio' } },
};

export const defaultArgs: ITextInputProps = {
  id: 'field',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  inputType: 'text',
  placeholder: '',
  value: '',
  valueType: 'text',
};

export const TextInput: React.FC<ITextInputProps> = ({
  id = defaultArgs.id,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  inputType = defaultArgs.inputType,
  placeholder = defaultArgs.placeholder,
  value = defaultArgs.value,
  valueType = defaultArgs.valueType,
}) => {
  const props = {
    id,
    className: clsx(
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      disabled && 'utrecht-textbox--disabled',
      focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
      invalid && 'utrecht-textbox--invalid',
      readOnly && 'utrecht-textbox--readonly',
      required && 'utrecht-textbox--required',
    ),
    disabled: disabled || null,
    'aria-invalid': invalid || null,
    required: required || null,
    readOnly: readOnly || null,
    placeholder: placeholder || null,
    defaultValue: value,
    ...((valueType === 'number' || valueType === 'currency') && {
      inputMode: 'numeric' as any,
      pattern: valueType === 'currency' ? '[0-9.,]*' : '[0-9]*',
    }),
  };

  if (inputType === 'text') {
    const inputMarkup = <input type="text" {...props} />;
    if (valueType === 'currency') {
      return <div className="rvo-layout-row rvo-layout-gap--md">€{inputMarkup}</div>;
    } else {
      return inputMarkup;
    }
  } else {
    return <textarea {...props} />;
  }
};
