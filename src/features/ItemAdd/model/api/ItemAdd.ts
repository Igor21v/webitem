import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface ItemAddArg {
    userId: string;
    itemId?: string;
    rate: number;
    feedback?: string;
}

const itemAddApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        itemAdd: build.mutation<Rating[], ItemAddArg>({
            query: (arg) => ({
                url: '/items',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useItemAdd = itemAddApi.useItemAddMutation;
