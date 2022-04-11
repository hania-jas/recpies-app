import React from 'react';

import { ButtonType } from './button.enums';
import { StyledButton, TextContainer } from './button.styled';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    className,
    onClick,
    text,
    type = ButtonType.Primary,
  }: ButtonProps = props;

  return (
    <StyledButton
      className={className}
      buttonType={type}
      onClick={onClick}
      data-testid="next"
    >
      <TextContainer>{text}</TextContainer>
    </StyledButton>
  );
};
