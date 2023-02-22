import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CodeEditorSchema } from '../types/codeEditor';

const initialState: CodeEditorSchema = {
    error: undefined,
    isLoading: false,
};

export const codeEditorSlice = createSlice({
    name: 'codeEditor',
    initialState,
    reducers: {
        : (state, { payload }: PayloadAction<>) => {
            state. = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCodeEditor.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCodeEditor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCodeEditor.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: codeEditorActions } = codeEditorSlice;
export const { reducer: codeEditorReducer } = codeEditorSlice;
