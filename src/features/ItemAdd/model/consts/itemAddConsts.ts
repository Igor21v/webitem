import { ItemAddSchema } from '../types/itemAddSchema';

export const initialState: ItemAddSchema = {
    isLoading: false,
    error: undefined,
    fulfilled: false,
    item: {
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: 'not selected',
        width: 455,
        height: 260,
        useSize: false,
    },
};
