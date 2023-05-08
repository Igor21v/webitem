import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './SidebarItem.module.scss';
import { getRouteItems } from '@/shared/const/router';
import { ItemType, ItemTypeUI } from '@/entities/Item';
import { TextTheme } from '@/shared/ui/Text';
import { AppImage } from '@/shared/ui/AppImage';
import ItemIcon from '@/shared/assets/icons/item-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

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
            <AppImage
                src={`${__STATIC_URL__}/item_type_icons/${item.type}.png`}
                fallback=<Skeleton height={20} width={20} />
                errorFallback=<Icon
                    Svg={ItemIcon}
                    height={20}
                    width={20}
                    inverted
                />
                className={cls.icon}
            />
            {!collapsed && (
                <ItemTypeUI
                    type={item?.type}
                    className={cls.link}
                    theme={TextTheme.INVERTED_BRIGHT}
                />
            )}
        </AppLink>
    );
});
