import { ItemEditType } from '@/entities/Item';
import { ValidateAddItemError } from '../../types/itemAddSchema';

export const validateAddItem = (item: ItemEditType) => {
    const { title, type, useSize, width, height } = item;
    const errors: ValidateAddItemError[] = [];

    if (!title) {
        errors.push('incorrect title');
    }
    if (!type) {
        errors.push('incorrect type');
    }
    if (
        useSize &&
        (!width ||
            !height ||
            width < 10 ||
            width > 4000 ||
            height < 10 ||
            height > 4000)
    ) {
        errors.push('incorrect size');
    }

    return errors;
};
