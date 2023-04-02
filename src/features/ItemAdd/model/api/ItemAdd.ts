import { Item } from '@/entities/Item';
import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

type ItemAddArg = Omit<Item, 'id' | 'views' | 'createdAt'>;

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
