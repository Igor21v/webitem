import { StateSchema } from '@/app/providers/StoreProvider';
import { ItemSortField, ItemView } from '@/entities/Item';

export const getItemsPageIsLoading = (state: StateSchema) =>
    state.itemsPage?.isLoading || false;
export const getItemsPageError = (state: StateSchema) => state.itemsPage?.error;
export const getItemsPageView = (state: StateSchema) =>
    state.itemsPage?.view || ItemView.BIG;
export const getItemsPageNum = (state: StateSchema) =>
    state.itemsPage?.page || 1;
export const getItemsPageLimit = (state: StateSchema) =>
    state.itemsPage?.limit || 20;
export const getItemsPageHasMore = (state: StateSchema) =>
    state.itemsPage?.hasMore;
export const getItemsPageInited = (state: StateSchema) =>
    state.itemsPage?._inited;
export const getItemsPageOrder = (state: StateSchema) =>
    state.itemsPage?.order ?? 'asc';
export const getItemsPageSort = (state: StateSchema) =>
    state.itemsPage?.sort ?? ItemSortField.CREATED;
export const getItemsPageSearch = (state: StateSchema) =>
    state.itemsPage?.search ?? '';
export const getItemsPageType = (state: StateSchema) =>
    state.itemsPage?.type ?? 'all';
export const getSearchFocus = (state: StateSchema) =>
    state.itemsPage?.searchFocus ?? false;
