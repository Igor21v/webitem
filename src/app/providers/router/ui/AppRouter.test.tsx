/* eslint-disable class-methods-use-this */
import { screen } from '@testing-library/react';
import ResizeObserver from 'resize-observer-polyfill';
import { getRoute } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { UserRole } from '@/entities/User';

global.ResizeObserver = ResizeObserver;

describe('app/router/AppRouter', () => {
    test('Страница должна отрендерится', async () => {
        componentRender(<AppRouter />, {
            route: getRoute('about', 'ru'),
        });
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/asfasfasfasf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    /* test('Редирект неавторизованного пользователя на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRoute('admin_panel', 'ru', '1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    }); */

    test('Доступ запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRoute('admin_panel', 'ru'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен (присутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRoute('admin_panel', 'ru'),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
