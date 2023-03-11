import { StateSchema } from '@/app/providers/StoreProvider';

export const getItemRecommendationsIsLoading = (state: StateSchema) => {
    return state.itemDetailsPage?.recommendations?.isLoading;
};
export const getItemRecommendationsError = (state: StateSchema) => {
    return state.itemDetailsPage?.recommendations?.error;
};
