import { EditItemError, ItemEditType } from '@/entities/Item';

export type ValidateAddItemError = EditItemError | 'server error';

export interface ItemAddSchema {
    item: ItemEditType;
    error?: ValidateAddItemError[];
    formError?: EditItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
    validateEnable?: boolean;
}
