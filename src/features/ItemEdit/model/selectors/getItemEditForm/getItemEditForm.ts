import { buildSelector } from '@/shared/lib/store';
import { initialState } from '../../consts/ItemEditConsts';

export const [useItemAddSelector, getItemAddForm] = buildSelector(
    (state) => state.itemAdd ?? initialState,
);
