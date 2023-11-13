import styled from 'styled-components';

import { StyledComponent } from '../../models';
import { Button, Input } from '../../components';

export const Container = styled.div``;

export const StyledInput: StyledComponent<typeof Input> = styled(Input)`
  & + & {
    margin-top: 20px;
  }
`;

export const Form: StyledComponent<'form'> = styled.form`
  width: 100%;
`;

export const StyledButton: StyledComponent<typeof Button> = styled(Button)`
  margin: 20px 0;
`;
