import { Item } from './item';

interface ItemEditCardTypeImport extends Item {
    fullWidth?: boolean;
}

export type ItemEditCardType = Omit<
    ItemEditCardTypeImport,
    'id' | 'views' | 'createdAt'
>;
