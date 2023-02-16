import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { <FTName | capitalize>Schema } from '../types/<FTName | lowercasefirstchar>';

const initialState: <FTName|capitalize>Schema = {
    error: undefined,
    isLoading: false,
};

export const <FTName|lowercasefirstchar>Slice = createSlice({
    name: '<FTName|lowercasefirstchar>',
    initialState,
    reducers: {
        : (state, { payload }: PayloadAction<>) => {
            state. = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch<FTName|capitalize>.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetch<FTName|capitalize>.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetch<FTName|capitalize>.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: <FTName|lowercasefirstchar>Actions } = <FTName|lowercasefirstchar>Slice;
export const { reducer: <FTName|lowercasefirstchar>Reducer } = <FTName|lowercasefirstchar>Slice;
