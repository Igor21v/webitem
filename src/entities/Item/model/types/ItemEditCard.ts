import { Item } from './item';

export type ItemEditCardType = Omit<Item, 'id' | 'views' | 'createdAt'>;
