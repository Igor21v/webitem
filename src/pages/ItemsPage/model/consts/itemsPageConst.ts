import { ItemSortField, ItemView } from '@/entities/Item';
import { ItemsPageSchema } from '../types/itemsPageSchema';

export const itemsPageInitState = <ItemsPageSchema>{
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ItemView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 15,
    sort: ItemSortField.CREATED,
    search: '',
    order: 'desc',
    type: 'all',
    searchFocus: false,
};
