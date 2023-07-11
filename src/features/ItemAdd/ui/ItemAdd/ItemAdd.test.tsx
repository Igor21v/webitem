import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { ItemAdd } from './ItemAdd';
import { itemAddReducer } from '../../model/slice/ItemAddSlice';
import { $api } from '@/shared/api/api';

describe('features/ItemAdd', () => {
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
    afterEach(() => {
        jest.restoreAllMocks();
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
        // eslint-disable-next-line no-promise-executor-return
        const mockPostReq = jest.spyOn($api, 'post');

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
        expect(mockPostReq).toHaveBeenCalled();
    });
});
