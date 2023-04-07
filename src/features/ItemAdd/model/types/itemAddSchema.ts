import { ItemEditType } from '@/entities/Item';
import { ValidateAddItemError } from '../consts/itemAddConsts';

export interface ItemAddSchema {
    item: ItemEditType;
    error?: ValidateAddItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
}
