import { Item } from '@/entities/Item';
import { rtkApi } from '@/shared/api/rtkApi';

const itemLikeListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemLikeList: build.query<Item[], string>({
            query: (likesItem) => ({
                url: '/itemsLike',
                params: {
                    itemsReq: likesItem,
                },
            }),
        }),
    }),
});

export const useItemRecommendationsList =
    itemLikeListApi.useGetItemLikeListQuery;
