import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './SidebarItem.module.scss';
import { getRouteItems } from '@/shared/const/router';
import { ItemType } from '@/entities/Item';

interface SidibarItemProps {
    item: ItemType;
    collapsed: boolean;
}

export const SidibarItem = memo((props: SidibarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={getRouteItems(item.type)}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            {!collapsed && <span className={cls.link}>{t(item.text)}</span>}
        </AppLink>
    );
});
