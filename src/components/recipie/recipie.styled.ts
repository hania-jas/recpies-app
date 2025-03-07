import styled from 'styled-components';
import { StyledComponent } from '../../models';
import { Color } from '../../enums';
import Markdown from 'markdown-to-jsx';

export const Container: StyledComponent<'div'> = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-height: 350px;
  border: 1px solid ${Color.Gray};
  border-radius: 6px;
`;

export const ImgContainer: StyledComponent<'div'> = styled.div`
  width: 50%;
`;

export const Divider: StyledComponent<'img'> = styled.img`
  width: 90px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Img: StyledComponent<'img'> = styled.img`
  width: 100%;
  object-fit: cover;
  height: 348px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Content: StyledComponent<'div'> = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Title: StyledComponent<'div'> = styled.div`
  font-size: 20px;
  line-height: 26px;
  color: ${Color.AlmostBlack};
`;

export const StyledMarkdown: StyledComponent<typeof Markdown> = styled(Markdown)`
  max-width: 400px;
  width: 100%;
  color: ${Color.AlmostBlack};
  letter-spacing: 0.3px;
`;
