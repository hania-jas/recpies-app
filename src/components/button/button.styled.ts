import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Color } from '../../enums/color.enum';
import { StyledComponent } from '../../models';

import { StyledButtonProps } from './button.types';
import { ButtonType, FontWeight } from '../../enums';

export const TextContainer: StyledComponent<'div'> = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 15px 30px;
  font-size: 20px;
  line-height: 24px;
  font-weight: ${FontWeight.LightBold};
`;

export const ButtonStyles: {
  [ButtonType.Primary]: FlattenSimpleInterpolation;
  [ButtonType.Secondary]: FlattenSimpleInterpolation;
} = {
  [ButtonType.Primary]: css`
    ${TextContainer} {
      background-color: ${Color.Coral};
      color: ${Color.White};
    }
  `,

  [ButtonType.Secondary]: css`
    ${TextContainer} {
      background-color: ${Color.Green};
      color: ${Color.White};
    }
  `,
};

export const StyledButton: StyledComponent<'button', StyledButtonProps> = styled.button<StyledButtonProps>`
  outline: none;
  border: none;
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;
  min-width: 150px;
  border-radius: 5px;
  ${({ buttonType }: StyledButtonProps): FlattenSimpleInterpolation => ButtonStyles[buttonType]};
`;
