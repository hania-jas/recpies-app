import React from 'react';

import { StyledButton, TextContainer } from './button.styled';
import { ButtonProps } from './button.types';
import { ButtonType } from '../../enums';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    className,
    onClick,
    text,
    buttonType = ButtonType.Primary,
    type = 'button',
  }: ButtonProps = props;

  return (
    <StyledButton
      className={className}
      buttonType={buttonType}
      onClick={onClick}
      type={type}
    >
      <TextContainer>{text}</TextContainer>
    </StyledButton>
  );
};
