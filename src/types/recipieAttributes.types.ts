import { RecipieCategory } from '../enums';

export interface RecipieAttributes {
  title: string;
  content: string;
  category: RecipieCategory;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}
