import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { NavbarItemType } from '../../model/types/navbar';
import cls from './NavbarItem.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { SpriteImg } from '@/shared/ui/SpriteImg';
import { getRoute, langType } from '@/shared/const/router';

export const NavbarItem = memo((item: NavbarItemType) => {
    const { t, i18n } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={getRoute(item.path, i18n.language as langType, item.pathParam)}
            className={classNames(cls.item, {})}
        >
            {/* <AppImage
                src={`${__STATIC_URL__}/navbar_icons/${item.text}.png`}
                height={20}
                width={20}
                fallback=<Skeleton height={20} width={20} />
            /> */}
            <SpriteImg
                widthSource={32}
                heightSource={32}
                backgroundURL={`${__STATIC_URL__}/bar_icons/navbar_sprite.png`}
                offsetX={item.ImgOffsetX}
                offsetY={item.ImgOffsetY}
                zoom={0.625}
                fallback=<Skeleton height={20} width={20} />
            />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
