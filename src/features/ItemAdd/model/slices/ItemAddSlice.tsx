import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemAddSchema } from '../types/itemAdd';

const initialState: ItemAddSchema = {
    error: undefined,
    isLoading: false,
};

export const itemAddSlice = createSlice({
    name: 'itemAdd',
    initialState,
    reducers: {
        : (state, { payload }: PayloadAction<>) => {
            state. = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemAdd.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchItemAdd.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchItemAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: itemAddActions } = itemAddSlice;
export const { reducer: itemAddReducer } = itemAddSlice;
