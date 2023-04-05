import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store/buildSlice';
import { ItemAddType, ItemAddSchema } from '../types/itemAddSchema';
import { itemAdd } from '../services/addItem';

const initialState: ItemAddSchema = {
    isLoading: false,
    error: undefined,
    fulfilled: false,
    item: {
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: 'not selected',
        img: '',
        imgAnim: '',
        width: 450,
        height: 256,
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
    extraReducers: (builder) => {
        builder
            .addCase(itemAdd.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(itemAdd.fulfilled, (state) => {
                console.log('fulfilled');
                state = initialState;
                state.isLoading = false;
                state.fulfilled = true;
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
