import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchItemsList } from '../fetchItemsList/fetchItemsList';
import { fetchNextItemsPage } from './fetchNextItemsPage';

jest.mock('../fetchItemsList/fetchItemsList');

describe('fetchNextItemsPage.test', () => {
    test('Success', async () => {
        const thunk = new TestAsyncThunk(fetchNextItemsPage, {
            itemsPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchItemsList).toHaveBeenCalled();
    });
    test('fetchItemList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextItemsPage, {
            itemsPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchItemsList).not.toHaveBeenCalled();
    });
});
