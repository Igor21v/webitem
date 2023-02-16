import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/EditableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';

import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Asd',
    age: 23,
    city: 'Test',
    country: Country.Belarus,
    lastname: 'Flcvb',
    currency: Currency.EUR,
    username: 'hhh',
};

describe('profileSlice.test', () => {
    test('setUsername', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });
    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_AGE],
            data: { first: '123' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: { first: '123' },
            data: { first: '123' },
        });
    });
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: '333' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ first: '444' }),
            ),
        ).toEqual({ form: { first: '444' } });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            ValidateProfileError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
