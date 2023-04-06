import { Item } from '@/entities/Item';
import { ValidateAddItemError } from '../consts/itemAddConsts';

interface ItemAddTypeImport extends Item {
    fullWidth?: boolean;
}

export type ItemAddType = Omit<ItemAddTypeImport, 'id' | 'views' | 'createdAt'>;

export interface ItemAddSchema {
    item: ItemAddType;
    error?: ValidateAddItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
}
