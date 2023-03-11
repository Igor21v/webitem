import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getItemDetailsData } from '@/entities/Item';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { fetchCommentsByItemId } from '../fetchCommentsByItemId/fetchCommentsByItemId';

export const addCommentForItem = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('itemDetails/addCommentForItem', async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;
    const userData = getUserAuthData(getState());
    const item = getItemDetailsData(getState());

    if (!userData || !text || !item) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            itemId: item.id,
            userId: userData.id,
            text,
        });
        if (!response.data) {
            throw new Error();
        }
        /* const newComment: Comment = {
                id: response.data.id,
                user: userData,
                text: response.data.text,
            }; */
        dispatch(fetchCommentsByItemId(item.id));
        /* dispatch(itemDetailsCommentsAction.addComment(newComment)); */

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
