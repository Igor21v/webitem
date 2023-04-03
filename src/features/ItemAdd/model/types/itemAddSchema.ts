import { Item } from '@/entities/Item';

export type ItemAddSchema = Omit<Item, 'id' | 'views' | 'createdAt'>;
