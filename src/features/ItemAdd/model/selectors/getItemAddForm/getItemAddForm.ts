import { buildSelector } from '@/shared/lib/store';
import { initialState } from '../../consts/itemAddConsts';

export const [useItemAddSelector, getItemAddForm] = buildSelector(
    (state) => state.itemAdd ?? initialState,
);
