import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemTypesListSchema } from '../types/itemTypesList';

const initialState: ItemTypesListSchema = {
    error: undefined,
    isLoading: false,
};

export const itemTypesListSlice = createSlice({
    name: 'itemTypesList',
    initialState,
    reducers: {
        : (state, { payload }: PayloadAction<>) => {
            state. = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemTypesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchItemTypesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchItemTypesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: itemTypesListActions } = itemTypesListSlice;
export const { reducer: itemTypesListReducer } = itemTypesListSlice;
