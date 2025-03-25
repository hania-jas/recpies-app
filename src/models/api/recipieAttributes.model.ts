import { RecipieCategory } from '../../enums';
import { ImageData } from '..';

export interface RecipieAttributes {
  title: string;
  content: string;
  category: RecipieCategory;
  createdAt: string;
  image: ImageData;
  publishedAt: string;
  updatedAt: string;
  ingredients: string;
}
