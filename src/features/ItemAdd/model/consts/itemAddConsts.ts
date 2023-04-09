import { ItemAddSchema } from '../types/itemAddSchema';

export const initialState: ItemAddSchema = {
    isLoading: false,
    error: undefined,
    fulfilled: false,
    item: {
        codes: { html: '', css: '', js: '' },
        title: '',
        description: '',
        type: undefined,
        img: '',
        imgAnim: '',
        width: 450,
        height: 256,
        useSize: false,
    },
};
