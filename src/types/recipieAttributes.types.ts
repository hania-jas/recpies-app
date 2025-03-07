import { RecipieCategory } from '../enums';

export interface RecipieAttributes {
  title: string;
  content: string;
  category: RecipieCategory;
  createdAt: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
}
