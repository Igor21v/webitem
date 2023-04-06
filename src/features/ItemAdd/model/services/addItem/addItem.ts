import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemAddForm/getItemAddForm';
import { ItemAddType } from '../../types/itemAddSchema';

export const itemAdd = createAsyncThunk<undefined, void, ThunkConfig<string>>(
    'profile/itemAdd',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getItemAddForm(getState());
        const { item } = formData;
        const dataToSend: ItemAddType = {
            title: item.title,
            description: item.description,
            codes: item.codes,
            type: item.type,
            img: item.img,
            imgAnim: item.imgAnim,
        };
        if (!item.fullWidth) {
            dataToSend.width = item.width;
            dataToSend.height = item.height;
        }

        try {
            await extra.api.post(`/items`, dataToSend);
            return undefined;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
