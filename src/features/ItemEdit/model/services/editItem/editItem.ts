import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemEditForm } from '../../selectors/getItemEditForm/getItemEditForm';
import { ValidateEditItemError } from '../../types/itemEditSchema';
import { languageType } from '@/shared/types/codes';
import { initialState } from '../../consts/ItemEditConsts';

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
    // Исключаем неиспользуемый код:
    const codesToSend = { ...initialState.item.codes };
    Object.entries(item.codes).forEach(([key, code]) => {
        if (code === '') {
            delete codesToSend[key as languageType];
        } else {
            codesToSend[key as languageType] = code;
        }
    });
    const itemToSend = {
        ...item,
        codes: codesToSend,
    };
    // ***
    try {
        await extra.api.put(`/items/${item.id}`, itemToSend);
        return undefined;
    } catch (error) {
        return rejectWithValue(['server error']);
    }
});
