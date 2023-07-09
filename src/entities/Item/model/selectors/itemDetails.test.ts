import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getItemDetailsData,
    getItemDetailsError,
    getItemDetailsIsLoading,
} from './itemDetails';

describe('itemDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            itemDetails: {
                data,
            },
        };
        expect(getItemDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getItemDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            itemDetails: {
                isLoading: true,
            },
        };
        expect(getItemDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('isLoading should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getItemDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            itemDetails: {
                error: 'error',
            },
        };
        expect(getItemDetailsError(state as StateSchema)).toEqual('error');
    });
    test('Error should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getItemDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
