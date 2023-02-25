import { combineReducers } from '@reduxjs/toolkit';
import { ItemDetailsPageSchema } from '../types';
import { itemDetailsCommentsReducer } from './itemDetailsCommentsSlice';
import { itemDetailsRecommendationReducer } from './ItemDetailsRecommendationSlice';

export const itemDetailsPageReducer = combineReducers<ItemDetailsPageSchema>({
    recommendations: itemDetailsRecommendationReducer,
    comments: itemDetailsCommentsReducer,
});
