import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store/buildSlice';

import { itemEdit } from '../services/editItem/editItem';
import { initialState } from '../consts/ItemEditConsts';
import { Item } from '@/entities/Item';

export const itemEditSlice = buildSlice({
    name: 'itemEdit',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<Partial<Item>>) => {
            state.item = {
                ...state.item,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(itemEdit.pending, (state) => {
                state.error = undefined;
                state.fulfilled = false;
                state.isLoading = true;
            })
            .addCase(itemEdit.fulfilled, (state) => {
                state.error = undefined;
                state.fulfilled = true;
                state.isLoading = false;
                state.item = initialState.item;
            })
            .addCase(itemEdit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: itemEditActions,
    reducer: itemEditReducer,
    useActions: useItemEditActions,
} = itemEditSlice;
