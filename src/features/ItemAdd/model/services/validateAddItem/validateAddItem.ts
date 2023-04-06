import { ValidateAddItemError } from '../../consts/itemAddConsts';
import { ItemAddType } from '../../types/itemAddSchema';

export const validateProfileData = (item?: ItemAddType) => {
    const {} = item;
    const errors: ValidateAddItemError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    console.log(`ffss ${typeof age}`);
    if (!age || !Number.isInteger(age) || age > 150) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
