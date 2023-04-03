import { buildSelector } from '@/shared/lib/store';

export const [useItemAddSelector, getItemAddForm] = buildSelector(
    (state) => state.itemAdd,
);
