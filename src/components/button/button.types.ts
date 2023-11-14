import { MouseEventHandler } from 'react';
import { ButtonType } from '../../enums';

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler | (() => void);
  className?: string;
  buttonType?: ButtonType;
  type?: 'button' | 'submit';
}

export interface StyledButtonProps {
  buttonType: ButtonType;
}
