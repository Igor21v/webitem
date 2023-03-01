import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ItemDetailPage } from '@/pages/ItemDetailsPage';
import { ItemEditPage } from '@/pages/ItemEditPage';
import { ItemsPage } from '@/pages/ItemsPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteItemCreate,
    getRouteItemDetails,
    getRouteItemEdit,
    getRouteForbidden,
    getRouteItems,
    getRouteMain,
    getRouteProfile,
    getRouteFavourites,
} from '@/shared/const/router';
import { FavouritesPage } from '@/pages/FavouritesPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ITEMS]: {
        path: getRouteItems(':type'),
        element: <ItemsPage />,
    },
    [AppRoutes.ITEM_DETAILS]: {
        path: getRouteItemDetails(':id'),
        element: <ItemDetailPage />,
    },
    [AppRoutes.ITEM_CREATE]: {
        path: getRouteItemCreate(),
        element: <ItemEditPage />,
        authOnly: true,
    },
    [AppRoutes.ITEM_EDIT]: {
        path: getRouteItemEdit(':id'),
        element: <ItemEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FAVOURITES]: {
        path: getRouteFavourites(),
        element: <FavouritesPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
