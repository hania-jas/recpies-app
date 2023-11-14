import styled from 'styled-components';

import { Color } from '../../enums/color.enum';
import { StyledComponent } from '../../models';
import { BaseInputProps } from './input.types';
import { FontWeight } from '../../enums';

export const Container: StyledComponent<'div'> = styled.div`
  width: 100%;
  position: relative;
`;

export const BaseInput: StyledComponent<'input', BaseInputProps> = styled.input<BaseInputProps>`
  padding: ${({ $withPasswordButton }: BaseInputProps): string => $withPasswordButton ? '12px 20px' : '12px'};
  width: 100%;
  height: auto;
  display: inline;
  box-sizing: border-box;
  border-bottom: 1px solid ${Color.AlmostBlack};
`;

export const InputLabel: StyledComponent<'label'> = styled.label`
  font-size: 14px;
  line-height: 20px;
  color: ${Color.AlmostBlack};
  pointer-events: none;
  background-color: ${Color.White};
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: calc(100% - 20px);
`;

export const TogglePasswordType: StyledComponent<'button'> = styled.button.attrs({ type: 'button' })`
  font-weight: ${FontWeight.Bold};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Color.AlmostBlack};
  position: absolute;
  right: 16px;
  transform: translateY(-50%);
`;
