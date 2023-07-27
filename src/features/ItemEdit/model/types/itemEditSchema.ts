import { EditItemError, Item } from '@/entities/Item';

export type ValidateEditItemError = EditItemError | 'server error';

export interface ItemEditSchema {
    item: Item;
    formError?: EditItemError[];
    error?: ValidateEditItemError[];
    isLoading?: boolean;
    fulfilled?: boolean;
}
