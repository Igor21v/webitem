import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRouteProps, routeConfig } from '../config/routeConfig';
import { langType } from '@/shared/const/router';

const AppRouter = () => {
    const { i18n } = useTranslation();
    console.log('Render AppRout');

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig(i18n.language as langType)).map(
                renderWithWrapper,
            )}
        </Routes>
    );
};

export default memo(AppRouter);
