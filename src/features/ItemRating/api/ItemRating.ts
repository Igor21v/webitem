import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetItemRatingArg {
    userId: string;
    itemId?: string;
}

interface RateItemArg {
    userId: string;
    itemId?: string;
    rate: number;
    feedback?: string;
}

const itemRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemRating: build.query<Rating[], GetItemRatingArg>({
            query: ({ userId, itemId }) => ({
                url: '/itemRatings',
                params: {
                    userId,
                    itemId,
                },
            }),
        }),
        reteItem: build.mutation<Rating[], RateItemArg>({
            query: (arg) => ({
                url: '/itemRatings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetItemRating = itemRatingApi.useGetItemRatingQuery;
export const useRateItem = itemRatingApi.useReteItemMutation;
