import { Item } from '@/entities/Item';

interface ItemAddTypeImport extends Item {
    fullWidth?: boolean;
}

export type ItemAddType = Omit<ItemAddTypeImport, 'id' | 'views' | 'createdAt'>;

export interface ItemAddSchema {
    item: ItemAddType;
    error?: string;
    isLoading?: boolean;
    fulfilled?: boolean;
}
