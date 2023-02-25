import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Item, ItemSortField, ItemTypes, ItemView } from '@/entities/Item';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types';
import { fetchItemsList } from '../services/fetchItemsList/fetchItemsList';
import { ItemsPageSchema } from '../types/itemsPageSchema';

const itemsAdapter = createEntityAdapter<Item>({
    selectId: (item) => item.id,
});

export const getItems = itemsAdapter.getSelectors<StateSchema>(
    (state) => state.itemsPage || itemsAdapter.getInitialState(),
);

export const itemsPageSlice = createSlice({
    name: 'itemsPageSlice',
    initialState: itemsAdapter.getInitialState<ItemsPageSchema>({
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
        order: 'asc',
        type: 'all',
    }),
    reducers: {
        setView: (state, action: PayloadAction<ItemView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ItemSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ItemTypes>) => {
            state.type = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        initState: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    itemsAdapter.removeAll(state);
                }
            })
            .addCase(fetchItemsList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    itemsAdapter.setAll(state, action.payload);
                } else {
                    itemsAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchItemsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: itemsPageActions } = itemsPageSlice;
export const { reducer: itemsPageReducer } = itemsPageSlice;
