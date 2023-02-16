import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UI';

const initialState: UISchema = {
    scroll: {},
    dimensions: {
        width: 0,
        height: 0,
    },
};

export const uISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
        setPageDimensions: (
            state,
            { payload }: PayloadAction<{ width: number; height: number }>,
        ) => {
            state.dimensions.width = payload.width;
            state.dimensions.height = payload.height;
        },
    },
});

export const { actions: uIActions } = uISlice;
export const { reducer: uIReducer } = uISlice;
