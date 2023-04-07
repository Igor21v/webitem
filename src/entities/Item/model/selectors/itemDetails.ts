import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const getItemDetailsData = (state: StateSchema) =>
    state.itemDetails?.data;
export const getItemDetailsIsLoading = (state: StateSchema) =>
    state.itemDetails?.isLoading || false;
export const getItemDetailsError = (state: StateSchema) =>
    state.itemDetails?.error;
export const [useItemDetailsSelector, getItemDetails] = buildSelector(
    (state: StateSchema) => state.itemDetails,
);
