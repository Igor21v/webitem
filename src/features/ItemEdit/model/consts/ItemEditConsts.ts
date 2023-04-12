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
        width: 455,
        height: 260,
        useSize: false,
    },
};
