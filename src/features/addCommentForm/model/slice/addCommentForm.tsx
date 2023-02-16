import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    /* extraReducers: (builder) => {
        builder
            .addCase(fetchAddCommentForm.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAddCommentForm.fulfilled, (state, action: PayloadAction<AddCommentForm>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAddCommentForm.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }, */
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
