import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemAddForm/getItemAddForm';
import { ItemAddType } from '../../types/itemAddSchema';
import { validateAddItem } from '../validateAddItem/validateAddItem';
import { ValidateAddItemError } from '../../consts/itemAddConsts';

export const itemAdd = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateAddItemError[]>
>('profile/itemAdd', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemAddForm(getState());
    const { item } = formData;
    const errors = validateAddItem(item);
    if (errors.length) {
        return rejectWithValue(errors);
    }
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
        return rejectWithValue([ValidateAddItemError.SERVER_ERROR]);
    }
});
