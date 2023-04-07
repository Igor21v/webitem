import { ItemEditType } from '@/entities/Item';
import { ValidateAddItemError } from '../../consts/ItemEditConsts';

export const validateAddItem = (item: ItemEditType) => {
    const { title, type, fullWidth, width, height } = item;
    const errors: ValidateAddItemError[] = [];

    if (!title) {
        errors.push(ValidateAddItemError.INCORRECT_TITLE);
    }
    if (!type) {
        errors.push(ValidateAddItemError.INCORRECT_TYPE);
    }
    if (
        !fullWidth &&
        (!width ||
            !height ||
            width < 10 ||
            width > 4000 ||
            height < 10 ||
            height > 4000)
    ) {
        errors.push(ValidateAddItemError.INCORRECT_SIZE);
    }

    return errors;
};
