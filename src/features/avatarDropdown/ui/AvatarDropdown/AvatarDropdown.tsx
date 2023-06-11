import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getRoute, langType } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const isAdminPanalAvailable = isAdmin || isManager;
    return (
        <Dropdown
            className={className}
            direction="bottom left"
            items={[
                ...(isAdminPanalAvailable
                    ? [
                          {
                              content: t('Admin panel'),
                              href: getRoute(
                                  'admin_panel',
                                  i18n.language as langType,
                              ),
                          },
                      ]
                    : []),
                {
                    content: t('Profile'),
                    href: getRoute(
                        'profile',
                        i18n.language as langType,
                        authData!.id,
                    ),
                },
                {
                    content: t('sign-out'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar fallbackInverted size={35} src={authData!.avatar} />
            }
        />
    );
});
