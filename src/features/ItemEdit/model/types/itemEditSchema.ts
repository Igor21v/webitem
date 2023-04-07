import { ItemEditType } from '@/entities/Item';
import { ValidateAddItemError } from '../consts/ItemEditConsts';

export interface ItemEditSchema {
    item: ItemEditType;
    error?: ValidateAddItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
}
