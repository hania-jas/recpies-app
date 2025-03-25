import { RecipieItem } from '../../types';


export interface RecipieProps {
  data: RecipieItem;
  onClick: () => void;
  className?: string;
}
