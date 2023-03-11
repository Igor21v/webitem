import { StateSchema } from '@/app/providers/StoreProvider';

export const getItemDetailsData = (state: StateSchema) =>
    state.itemDetails?.data;
export const getItemDetailsIsLoading = (state: StateSchema) =>
    state.itemDetails?.isLoading || false;
export const getItemDetailsError = (state: StateSchema) =>
    state.itemDetails?.error;
