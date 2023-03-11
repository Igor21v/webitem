import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByItemId } from '../services/fetchCommentsByItemId/fetchCommentsByItemId';
import { ItemDetailsCommentsSchema } from '../types/ItemDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getItemComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.itemDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const itemDetailsCommentSlice = createSlice({
    name: 'itemDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ItemDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            commentsAdapter.setOne(state, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByItemId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByItemId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByItemId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: itemDetailsCommentsReducer } = itemDetailsCommentSlice;
export const { actions: itemDetailsCommentsAction } = itemDetailsCommentSlice;
