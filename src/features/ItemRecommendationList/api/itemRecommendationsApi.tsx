import { Item, ItemTypes } from '@/entities/Item';
import { rtkApi } from '@/shared/api/rtkApi';

interface recommendationsApiType {
    limit: number;
    type?: ItemTypes;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemRecommendationsList: build.query<Item[], recommendationsApiType>(
            {
                query: ({ limit, type }) => ({
                    url: '/items',
                    params: {
                        _limit: limit,
                        type,
                        _order: 'desc',
                    },
                }),
            },
        ),
    }),
});

export const useItemRecommendationsList =
    recommendationsApi.useGetItemRecommendationsListQuery;
