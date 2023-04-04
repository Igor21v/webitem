import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store/buildSlice';
import { ItemAddType, ItemAddSchema } from '../types/itemAddSchema';

const initialState: ItemAddSchema = {
    item: {
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: 'not selected',
        img: '',
        imgAnim: '',
    },
};

export const profileSlice = buildSlice({
    name: 'itemAdd',
    initialState,
    reducers: {
        updateItem: (state, action: PayloadAction<Partial<ItemAddType>>) => {
            state.item = {
                ...state.item,
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
