import styled from 'styled-components';
import { Button } from '../../components/button/button.component';
import { Color } from '../../enums';
import Background from './images/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${`url(${Background})`};
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding-left: 80px;
  max-width: 640px;
`;

export const AppTitle = styled.div`
  font-size: 40px;
  font-family: Monopola;
  color: ${Color.Coral};
`;

export const Header = styled.div`
  font-size: 72px;
  font-family: Worldwide;
  text-transform: capitalize;
  color: ${Color.AlmostBlack};
  line-height: 95px;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)``;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;

  ${StyledButton} + ${StyledButton} {
    margin-left: 10px;
  }
`;

export const ChangeLanguageButton = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${Color.AlmostBlack};
  position: absolute;
  right: 30px;
  bottom: 25px;
  background-color: transparent;
  font-size: 30px;
  text-transform: uppercase;
  cursor: pointer;
`;
