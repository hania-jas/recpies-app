import { MouseEventHandler } from 'react';
import { ButtonType } from './button.enums';

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler | (() => void);
  className?: string;
  type?: ButtonType;
}

export interface StyledButtonProps {
  buttonType: ButtonType;
}
