import { ItemEditSchema } from '../types/itemEditSchema';

export const initialState: ItemEditSchema = {
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
        fullWidth: true,
    },
};

export enum ValidateAddItemError {
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_TYPE = 'INCORRECT_TYPE',
    INCORRECT_TITLE = 'INCORRECT_TITLE',
    INCORRECT_SIZE = 'INCORRECT_SIZE',
}
