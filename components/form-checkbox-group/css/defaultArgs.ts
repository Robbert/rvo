import { ICheckboxProps } from '../../form-checkbox/css/template';
import { ICheckboxGroupProps } from './template';

const defaultOptions: ICheckboxProps[] = [
  { id: 'optionA', label: 'Option A' },
  { id: 'optionB', label: 'Option B', checked: true },
  { id: 'optionC', label: 'Option C' },
  { id: 'optionD', label: 'Option D' },
];

export const defaultArgs: ICheckboxGroupProps = {
  invalid: false,
  options: defaultOptions,
};
