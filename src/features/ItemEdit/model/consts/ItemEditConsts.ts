import { ItemEditSchema } from '../types/itemEditSchema';

export const initialState: ItemEditSchema = {
    isLoading: false,
    error: undefined,
    fulfilled: false,
    item: {
        id: '',
        views: 0,
        createdAt: '',
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: undefined,
        width: 805,
        height: 462,
        useSize: false,
    },
};
