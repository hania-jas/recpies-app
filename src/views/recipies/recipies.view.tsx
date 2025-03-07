import React from 'react';

import { Container } from './recipies.styled';
import { getRecipiesList } from '../../api';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CommonListData, Recipie as RecipieType } from '../../models';
import { QueryKey } from '../../enums';
import { Recipie } from '../../components';
import { appConfig } from '../../appConfig';

export const RecipiesView: React.FC = (): React.JSX.Element => {
  const { data }: UseQueryResult<RecipieType[]> = useQuery({
    queryKey: [QueryKey.Recipies],
    queryFn: (): Promise<CommonListData<RecipieType[]>> => getRecipiesList(),
    select: (data: CommonListData<RecipieType[]>): RecipieType[] => data.data
  });

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
        />
      ))}
    </Container>
  );
};
