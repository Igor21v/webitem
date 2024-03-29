import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './SidebarItem.module.scss';
import { getRoute, langType } from '@/shared/const/router';
import { ItemType, ItemTypeUI } from '@/entities/Item';
import { TextTheme } from '@/shared/ui/Text';
import { SpriteImg } from '@/shared/ui/SpriteImg';
import { Skeleton } from '@/shared/ui/Skeleton';

interface SidibarItemProps {
    item: ItemType;
    collapsed: boolean;
    ImgOffsetX: number;
    ImgOffsetY: number;
}

export const SidibarItem = memo((props: SidibarItemProps) => {
    const { item, collapsed, ImgOffsetX, ImgOffsetY } = props;
    const { i18n } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={getRoute('items', i18n.language as langType, item.type)}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            {/* <AppImage
                src={`${__STATIC_URL__}/sidebar_icons/${item.type}.png`}
                height={20}
                width={20}
                fallback=<Skeleton height={20} width={20} />

                backgroundURL={`${__STATIC_URL__}/bar_icons/bar_sprite.png`}
            /> */}
            <SpriteImg
                widthSource={32}
                heightSource={32}
                backgroundURL={`${__STATIC_URL__}/bar_icons/sidebar_sprite.png`}
                offsetX={ImgOffsetX}
                offsetY={ImgOffsetY}
                zoom={0.625}
                fallback=<Skeleton height={20} width={20} />
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
