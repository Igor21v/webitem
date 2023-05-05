import { Item } from '@/entities/Item';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemRecommendationsList: build.query<Item[], number>({
            query: (limit) => ({
                url: '/items',
                params: {
                    _limit: limit,
                    _sort: 'views',
                    _order: 'desc',
                },
            }),
        }),
    }),
});

export const useItemRecommendationsList =
    recommendationsApi.useGetItemRecommendationsListQuery;
