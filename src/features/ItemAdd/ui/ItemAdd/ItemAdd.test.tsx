import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { ItemAdd } from './ItemAdd';
import { itemAddReducer } from '../../model/slice/ItemAddSlice';
import { $api } from '@/shared/api/api';

describe('features/EditableProfileCard', () => {
    beforeEach(async () => {
        await act(async () => {
            componentRender(<ItemAdd />, {
                initialState: {
                    user: {
                        authData: { id: '1', username: 'admin' },
                    },
                },
                asyncReducers: {
                    profile: itemAddReducer,
                },
            });
        });
    });

    test('Попытка добавления компонента с пустым полем заголовка и невыбранной темой', async () => {
        await act(async () => {
            await userEvent.click(screen.getByTestId('ItemAdd.AddButton'));
        });
        expect(screen.getAllByTestId('ItemAdd.Error.Paragraph')).toHaveLength(
            2,
        );
    });

    test('Попытка добавления компонента с пустым полем заголовка, невыбранной темой, и некорректным размером', async () => {
        await act(async () => {
            await userEvent.click(screen.getByTestId('SizePreview.Checkbox'));
            await userEvent.clear(screen.getByTestId('SizePreview.Width'));
            await userEvent.clear(screen.getByTestId('SizePreview.Height'));
            await userEvent.click(screen.getByTestId('ItemAdd.AddButton'));
        });
        expect(screen.getAllByTestId('ItemAdd.Error.Paragraph')).toHaveLength(
            3,
        );
    });

    test('Отправка запроса на добавление компонента', async () => {
        const mockPutReq = jest.spyOn($api, 'post');

        await act(async () => {
            await userEvent.type(
                screen.getByTestId('ItemEditCard.Title'),
                'Title Item',
            );
            await userEvent.selectOptions(
                screen.getByTestId('ItemTypeSelector.Select'),
                'animation',
            );
            await userEvent.click(screen.getByTestId('ItemAdd.AddButton'));
        });
        expect(mockPutReq).toHaveBeenCalled();
    });

    /* test('Изменение полей и отмена изменений', async () => {
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
    }); */
});
