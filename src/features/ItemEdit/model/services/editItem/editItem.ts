import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemEditForm/getItemEditForm';

import { validateAddItem } from '../validateEditItem/validateEditItem';
import { ValidateAddItemError } from '../../consts/ItemEditConsts';
import { ItemEditType } from '@/entities/Item';

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
    const dataToSend: ItemEditType = {
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
