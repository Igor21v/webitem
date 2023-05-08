import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { NavbarItemType } from '../../model/types/navbar';
import cls from './NavbarItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

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
            <AppImage
                src={`${__STATIC_URL__}/navbar_icons/${item.text}.png`}
                height={20}
                width={20}
                fallback=<Skeleton height={20} width={20} />
            />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
