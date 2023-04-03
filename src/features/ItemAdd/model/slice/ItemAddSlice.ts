import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store/buildSlice';
import { ItemAddSchema } from '../types/itemAddSchema';

const initialState: ItemAddSchema = {
    codes: { html: '', css: '', js: '' },
    title: '',
    description: '',
    type: 'not selected',
    img: '',
    imgAnim: '',
};

export const profileSlice = buildSlice({
    name: 'itemAdd',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<ItemAddSchema>) => {
            state = {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const {
    actions: itemAddActions,
    reducer: itemAddReducer,
    useActions: useItemAddActions,
} = profileSlice;
