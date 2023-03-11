import { EntityState } from '@reduxjs/toolkit';
import { Item, ItemSortField, ItemView, ItemTypes } from '@/entities/Item';

import { SortOrder } from '@/shared/types';

export interface ItemsPageSchema extends EntityState<Item> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ItemView;
    order: SortOrder;
    sort: ItemSortField;
    search: string;
    type: ItemTypes;

    _inited: boolean;
}
