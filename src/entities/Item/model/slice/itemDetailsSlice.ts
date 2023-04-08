import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchItemById } from '../services/fetchItemById/fetchItemById';
import { Item } from '../types/item';
import { ItemDetailsSchema } from '../types/itemDetailsSchema';

const initialState: ItemDetailsSchema = {
    isLoading: false,
    error: undefined,
    fulfilled: false,
    data: undefined,
};

export const itemDetailsSlice = createSlice({
    name: 'itemDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.fulfilled = false;
            })
            .addCase(
                fetchItemById.fulfilled,
                (state, action: PayloadAction<Item>) => {
                    state.isLoading = false;
                    state.fulfilled = true;
                    state.data = action.payload;
                },
            )
            .addCase(fetchItemById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.fulfilled = false;
            });
    },
});

export const { actions: itemDetailsActions } = itemDetailsSlice;
export const { reducer: itemDetailsReducer } = itemDetailsSlice;
