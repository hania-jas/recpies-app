import styled from 'styled-components';

import { StyledComponent } from '../../models';
import { Button, Input } from '../../components';
import Background from './images/background.png';
import { Color, FontWeight } from '../../enums';

export const Container = styled.div`
  background-image: ${`url(${Background})`};
  background-size: cover;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput: StyledComponent<typeof Input> = styled(Input)`
  & + & {
    margin-top: 20px;
  }
`;

export const FormContainer: StyledComponent<'div'> = styled.div`
  max-width: 700px;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${Color.White};
`;

export const Header: StyledComponent<'h1'> = styled.h1`
  color: ${Color.AlmostBlack};
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
  font-weight: ${FontWeight.Bold600};
`;

export const Form: StyledComponent<'form'> = styled.form`
  width: 100%;
`;

export const StyledButton: StyledComponent<typeof Button> = styled(Button)`
  margin-top: 30px;
  align-self: flex-end;
`;
