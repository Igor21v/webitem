import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ItemDetailPage } from '@/pages/ItemDetailsPage';
import { ItemEditPage } from '@/pages/ItemEditPage';
import { ItemsPage } from '@/pages/ItemsPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { langType, getRoute, AppRoutes } from '@/shared/const/router';
import { ItemsLikePage } from '@/pages/ItemsLikePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export const routeConfig = (
    lang: langType,
): Record<AppRoutes, AppRouteProps> => {
    const getRouteWrapper = (page: AppRoutes, param?: string) =>
        getRoute(page, lang, param);

    return {
        main: {
            path: getRouteWrapper('main'),
            element: <MainPage />,
        },
        about: {
            path: getRouteWrapper('about'),
            element: <AboutPage />,
        },
        profile: {
            path: getRouteWrapper('profile', ':id'),
            element: <ProfilePage />,
            authOnly: true,
        },
        items: {
            path: getRouteWrapper('items', ':type'),
            element: <ItemsPage />,
        },
        item_details: {
            path: getRouteWrapper('item_details', ':id'),
            element: <ItemDetailPage />,
        },
        item_create: {
            path: getRouteWrapper('item_create'),
            element: <ItemEditPage />,
            authOnly: true,
        },
        item_edit: {
            path: getRouteWrapper('item_edit', ':id'),
            element: <ItemEditPage />,
            authOnly: true,
        },
        admin_panele: {
            path: getRouteWrapper('admin_panele'),
            element: <AdminPanelPage />,
            authOnly: true,
            roles: [UserRole.MANAGER, UserRole.ADMIN],
        },
        favourites: {
            path: getRouteWrapper('favourites'),
            element: <ItemsLikePage />,
        },
        forbidden: {
            path: getRouteWrapper('forbidden'),
            element: <ForbiddenPage />,
        },
        // last
        not_found: {
            path: '*',
            element: <NotFoundPage />,
        },
    };
};
