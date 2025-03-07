import React from 'react';

import { Container, Content, Divider, Img, ImgContainer, StyledMarkdown, Title } from './recipie.styled';
import { RecipieProps } from './recipie.types';
import DividerImg from './images/divider.png';

export const Recipie: React.FC<RecipieProps> = (props: RecipieProps): React.JSX.Element => {
  const { className, data }: RecipieProps = props;

  return (
    <Container className={className}>
      <ImgContainer>
        <Img src={data.image} />
      </ImgContainer>
      <Content>
        <Title>{data.title}</Title>
        <Divider src={DividerImg} />
        <StyledMarkdown>{data.ingredients}</StyledMarkdown>
      </Content>
    </Container>
  );
};
