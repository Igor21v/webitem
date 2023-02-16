import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Asd',
    age: 23,
    city: 'Test',
    country: Country.Belarus,
    lastname: 'Flcvb',
    currency: Currency.EUR,
    username: 'hhh',
};

describe('validateProfileData.test', () => {
    test('No errors', async () => {
        const result = await validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('Whithout first and last names', async () => {
        const result = await validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('Incorrect age', async () => {
        const result = await validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('Incorrect country', async () => {
        const result = await validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('No data', async () => {
        const result = await validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('No data', async () => {
        const result = await validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
