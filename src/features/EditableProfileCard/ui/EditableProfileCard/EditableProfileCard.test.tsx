import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin1',
    age: 22,
    currency: Currency.USD,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin123',
};

describe('features/EditableProfileCard', () => {
    beforeEach(async () => {
        await act(async () => {
            componentRender(<EditableProfileCard id="1" />, {
                initialState: {
                    profile: {
                        readonly: true,
                        data: profile,
                        form: profile,
                    },
                    user: {
                        authData: { id: '1', username: 'admin' },
                    },
                },
                asyncReducers: {
                    profile: profileReducer,
                },
            });
        });
    });

    test('Переключение режима редактирования', async () => {
        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.EditButton'),
            );
        });
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('Изменение полей и отмена изменений', async () => {
        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.EditButton'),
            );
        });
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
            await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

            await userEvent.type(
                screen.getByTestId('ProfileCard.firstname'),
                'user',
            );
            await userEvent.type(
                screen.getByTestId('ProfileCard.lastname'),
                'user1',
            );
        });
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user1');

        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.CancelButton'),
            );
        });

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            'admin1',
        );
    });

    test('Должна появиться ошибка', async () => {
        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.EditButton'),
            );
        });
        await act(async () => {
            await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.SaveButton'),
            );
        });
        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('Изменение полей и отмена изменений', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.EditButton'),
            );
        });
        await act(async () => {
            await userEvent.type(
                screen.getByTestId('ProfileCard.firstname'),
                'user123',
            );
        });
        await act(async () => {
            await userEvent.click(
                screen.getByTestId('EditableProfileCardHeader.SaveButton'),
            );
        });

        expect(mockPutReq).toHaveBeenCalled();
    });
});
