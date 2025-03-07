import styled from 'styled-components';
import { StyledComponent } from '../../models';
import { Color } from '../../enums';

export const Container: StyledComponent<'div'> = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ImgContainer: StyledComponent<'div'> = styled.div`
  width: 50%;
`;

export const Img: StyledComponent<'img'> = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Content: StyledComponent<'div'> = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title: StyledComponent<'div'> = styled.div`
  font-size: 20px;
  line-height: 26px;
  color: ${Color.AlmostBlack};
`;
