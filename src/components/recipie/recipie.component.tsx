import React from 'react';

import { Container, Content, Img, ImgContainer, Title } from './recipie.styled';
import { RecipieProps } from './recipie.types';

export const Recipie: React.FC<RecipieProps> = (props: RecipieProps): React.JSX.Element => {
  const { className, data }: RecipieProps = props;

  return (
    <Container className={className}>
      <ImgContainer>
        <Img src={data.image} />
      </ImgContainer>
      <Content>
        <Title>{data.title}</Title>
      </Content>
    </Container>
  );
};
