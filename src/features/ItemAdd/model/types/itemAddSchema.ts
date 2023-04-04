import { Item } from '@/entities/Item';

export type ItemAdd = Omit<Item, 'id' | 'views' | 'createdAt'>;

export interface ItemAddSchema {
    item: ItemAdd;
}
