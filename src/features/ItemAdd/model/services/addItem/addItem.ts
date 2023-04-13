import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemAddForm } from '../../selectors/getItemAddForm/getItemAddForm';
import { ValidateAddItemError } from '../../types/itemAddSchema';
import { languageType } from '@/shared/types/codes';
import { initialState } from '../../consts/itemAddConsts';

export const itemAdd = createAsyncThunk<
    undefined,
    void,
    ThunkConfig<ValidateAddItemError[]>
>('item/itemAdd', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getItemAddForm(getState());
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
        await extra.api.post(`/items`, itemToSend);
        return undefined;
    } catch (error) {
        if (String(error).includes('code 409')) {
            return rejectWithValue(['already exists']);
        }
        return rejectWithValue(['server error']);
    }
});
