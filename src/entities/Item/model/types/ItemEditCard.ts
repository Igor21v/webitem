import { Item } from './item';

export type ItemEditCardType = Omit<Item, 'id' | 'views' | 'createdAt'>;

export type EditItemError =
    | 'incorrect type'
    | 'incorrect title'
    | 'incorrect size';
