import React from 'react';

import { Container } from './recipies.styled';
import { getRecipiesList } from '../../api';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CommonAttributes, CommonListData, RecipieAttributes, Recipie as RecipieType } from '../../models';
import { QueryKey } from '../../enums';
import { Recipie } from '../../components';
import { appConfig } from '../../appConfig';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const RecipiesView: React.FC = (): React.JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const { data }: UseQueryResult<CommonAttributes<RecipieAttributes>[]> = useQuery({
    queryKey: [QueryKey.Recipies],
    queryFn: (): Promise<CommonListData<CommonAttributes<RecipieAttributes>[]>> => getRecipiesList(),
    select: (data: CommonListData<CommonAttributes<RecipieAttributes>[]>): CommonAttributes<RecipieAttributes>[] => data.data
  });

  const onRecipieClick: (id: number) => void = (id: number): void => {
    navigate(`/recipies/${id}`);
  };

  return (
    <Container>
      {data?.map((item: RecipieType): React.JSX.Element => (
        <Recipie
          data={{
            title: item.attributes.title,
            image: `${appConfig.api}${item.attributes.image.data.attributes.url}`,
            ingredients: item.attributes.ingredients,
          }}
          key={item.id}
          onClick={(): void => onRecipieClick(item.id)}
        />
      ))}
    </Container>
  );
};
