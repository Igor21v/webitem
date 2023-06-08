import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { getRoute, langType } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const { i18n } = useTranslation();
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requireRole) => {
            const hasRole = userRoles?.includes(requireRole);
            return hasRole;
        });
    }, [roles, userRoles]);
    if (!auth) {
        return (
            <Navigate
                to={getRoute('main', i18n.language as langType)}
                state={{ from: location }}
                replace
            />
        );
    }
    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRoute('forbidden', i18n.language as langType)}
                state={{ from: location }}
                replace
            />
        );
    }
    return children;
}
