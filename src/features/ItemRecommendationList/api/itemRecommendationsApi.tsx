import { Item } from '@/entities/Item';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemRecommendationsList: build.query<Item[], number>({
            query: (limit) => ({
                url: '/items',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useItemRecommendationsList =
    recommendationsApi.useGetItemRecommendationsListQuery;
