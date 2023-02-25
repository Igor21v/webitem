import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Item } from '@/entities/Item';
import { fetchItemRecommendations } from '../services/fetchItemRecommendations/fetchItemRecommendations';
import { ItemDetailsRecommendationSchema } from '../types/ItemDetailsRecommendationSchema';

const recommendationsAdapter = createEntityAdapter<Item>({
    selectId: (item) => item.id,
});

export const getItemRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.itemDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const ItemDetailsRecommendationSlice = createSlice({
    name: 'ItemDetailsRecommendationSlice',
    initialState:
        recommendationsAdapter.getInitialState<ItemDetailsRecommendationSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {
        addComment: (state, action: PayloadAction<Item>) => {
            recommendationsAdapter.setOne(state, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchItemRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchItemRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: itemDetailsRecommendationReducer } =
    ItemDetailsRecommendationSlice;
export const { actions: itemDetailsRecommendationAction } =
    ItemDetailsRecommendationSlice;
