import { ItemAddSchema } from '../types/itemAddSchema';

export const initialState: ItemAddSchema = {
    isLoading: false,
    error: undefined,
    formError: ['incorrect title', 'incorrect type'],
    fulfilled: false,
    item: {
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: 'not selected',
        width: 805,
        height: 462,
        useSize: false,
    },
};
