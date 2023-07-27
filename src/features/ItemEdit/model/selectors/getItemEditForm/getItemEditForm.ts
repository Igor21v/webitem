import { buildSelector } from '@/shared/lib/store';
import { initialState } from '../../consts/ItemEditConsts';

export const [useItemEditSelector, getItemEditForm] = buildSelector(
    (state) => state.itemEdit ?? initialState,
);
