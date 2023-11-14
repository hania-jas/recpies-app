import { InputType } from '../../types/components';

export interface InputProps {
  label?: string;
  value?: string;
  type?: InputType;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  className?: string;
  infoMessage?: string;
}

export interface BaseInputProps {
  $withPasswordButton?: boolean;
}
