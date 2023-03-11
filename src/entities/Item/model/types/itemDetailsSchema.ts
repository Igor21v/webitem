import { Item } from './item';

export interface ItemDetailsSchema {
    isLoading: Boolean;
    error?: string;
    data?: Item;
}
