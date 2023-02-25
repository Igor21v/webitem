import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByItemId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('itemDetail/fetchCommentsByItemId', async (itemId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    if (!itemId) {
        rejectWithValue('error');
    }
    try {
        const response = await extra.api.get<Comment[]>('/comments/', {
            params: {
                itemId,
                _expand: 'user',
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
