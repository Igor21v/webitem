import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store/buildSlice';

import { itemAdd } from '../services/addItem/addItem';
import { initialState } from '../consts/itemAddConsts';
import { ItemEditType } from '@/entities/Item';

export const profileSlice = buildSlice({
    name: 'itemAdd',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<Partial<ItemEditType>>) => {
            state.item = {
                ...state.item,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(itemAdd.pending, (state) => {
                state.error = undefined;
                state.fulfilled = false;
                state.isLoading = true;
            })
            .addCase(itemAdd.fulfilled, (state) => {
                state.error = undefined;
                state.fulfilled = true;
                state.isLoading = false;
                state.item = initialState.item;
            })
            .addCase(itemAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: itemAddActions,
    reducer: itemAddReducer,
    useActions: useItemAddActions,
} = profileSlice;
