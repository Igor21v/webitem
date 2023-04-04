import { Item } from '@/entities/Item';

export type ItemAddType = Omit<Item, 'id' | 'views' | 'createdAt'>;

export interface ItemAddSchema {
    item: ItemAddType;
}
