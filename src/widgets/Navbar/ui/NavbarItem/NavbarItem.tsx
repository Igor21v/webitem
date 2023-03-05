import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { NavbarItemType } from '../../model/types/navbar';
import cls from './NavbarItem.module.scss';

export const NavbarItem = memo((item: NavbarItemType) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, {})}
        >
            <item.Icon className={classNames('', { [cls.icon]: item.fill })} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
