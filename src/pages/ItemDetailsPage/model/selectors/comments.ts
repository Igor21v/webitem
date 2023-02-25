import { StateSchema } from '@/app/providers/StoreProvider';

export const getItemCommentsIsLoading = (state: StateSchema) =>
    state.itemDetailsPage?.comments?.isLoading;
export const getItemCommentsError = (state: StateSchema) =>
    state.itemDetailsPage?.comments?.error;
