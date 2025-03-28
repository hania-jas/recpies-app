import styled from 'styled-components';
import { Breakpoint, Color } from '../../enums';
import Background from './images/background.png';
import { StyledComponent } from '../../models';

export const Container: StyledComponent<'div'> = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${`url(${Background})`};
  background-size: cover;
  display: flex;
  align-items: center;

  @media ${Breakpoint.Mobile} {
    background-size: contain;
    align-items: flex-start;
  }
`;

export const InnerContainer: StyledComponent<'div'> = styled.div`
  width: 100%;
  padding-left: 80px;
  max-width: 640px;

  @media ${Breakpoint.Mobile} {
    padding: 60px 30px 0;
  }
`;

export const AppTitle: StyledComponent<'div'> = styled.div`
  font-size: 40px;
  font-family: Monopola;
  color: ${Color.Coral};

  @media ${Breakpoint.Mobile} {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Header: StyledComponent<'div'> = styled.div`
  font-size: 72px;
  font-family: Worldwide;
  text-transform: capitalize;
  color: ${Color.AlmostBlack};
  line-height: 95px;
  margin-bottom: 20px;

  @media ${Breakpoint.Mobile} {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const ChangeLanguageButton: StyledComponent<'button'> = styled.button`
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
