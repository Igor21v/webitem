import { Item } from '@/entities/Item';
import { ValidateAddItemError } from '../consts/ItemEditConsts';

export interface ItemEditSchema {
    item: Item;
    error?: ValidateAddItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
}
