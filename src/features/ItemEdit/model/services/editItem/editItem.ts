import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemEditForm } from '../../selectors/getItemEditForm/getItemEditForm';
import { ValidateEditItemError } from '../../types/itemEditSchema';

export const itemEdit = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateEditItemError[]>
>('item/itemEdit', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemEditForm(getState());
    const { item, formError } = formData;
    if (formError?.length) {
        return rejectWithValue(formError);
    }
    try {
        await extra.api.put(`/items/${item.id}`, item);
        return undefined;
    } catch (error) {
        return rejectWithValue(['server error']);
    }
});
