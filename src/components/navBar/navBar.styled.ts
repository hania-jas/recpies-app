import styled from 'styled-components';
import { StyledComponent } from '../../models';
import { Color } from '../../enums';

export const Container: StyledComponent<'div'> = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${Color.Gray};
  background-color: ${Color.Cream};
`;

export const IconButton: StyledComponent<'button'> = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
`;
