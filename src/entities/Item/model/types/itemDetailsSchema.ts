import { Item } from './item';

export interface ItemDetailsSchema {
    isLoading: Boolean;
    error?: string;
    fulfilled?: boolean;
    data?: Item;
}
