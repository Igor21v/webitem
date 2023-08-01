import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarMobile.module.scss';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { SpriteImg } from '@/shared/ui/SpriteImg';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getRoute, langType } from '@/shared/const/router';
import { Popover } from '@/shared/ui/Popups';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { ButtonTheme } from '@/shared/ui/Button';

interface NavbarMobileNavigateProps {
    className?: string;
}

export const NavbarMobile = memo(({ className }: NavbarMobileNavigateProps) => {
    const { t, i18n } = useTranslation();
    const navbarItemsList = useSelector(getNavbarItems);

    useEffect(() => {
        const page = window.location.pathname.split('/')[2];
        const pageRu = window.location.pathname.split('/')[1];
        let activePage = navbarItemsList.findIndex((item) => {
            /*                 const itemPath = item.path.split('/')[1]; */
            return item.path === page || item.path === pageRu;
        });
        if (activePage === -1) activePage = 0; // для ненайденных роутов выбираем главную
        const root = document.documentElement;
        const items = Array.from(
            document.querySelectorAll<HTMLLIElement>(`.${cls.li}`),
        );
        items[activePage].setAttribute('data-active-navbar', 'true');
        root.style.setProperty('--active-navbar', `${activePage}`);
        const itemHandler = (item: any, index: any) => {
            root.style.setProperty('--active-navbar', index.toString());
            root.querySelectorAll('[data-active-navbar]').forEach((el) =>
                el.removeAttribute('data-active-navbar'),
            );
            item.setAttribute('data-active-navbar', 'true');
        };
        items.forEach((item, index) => {
            item.style.setProperty('--i', index.toString());
            item.addEventListener('click', () => itemHandler(item, index));
        });
        return () => {
            items.forEach((item, index) => {
                item.removeEventListener('click', () =>
                    itemHandler(item, index),
                );
            });
        };
    }, [navbarItemsList]);

    return (
        <nav className={classNames(cls.NavbarMobile, {}, [className])}>
            <ul className={cls.ul}>
                <div className={cls.bar} />
                {navbarItemsList.map((item) => (
                    <li className={cls.li} key={item.path}>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={getRoute(
                                item.path,
                                i18n.language as langType,
                                item.pathParam,
                            )}
                            className={cls.icon}
                            /* className={classNames(cls.item, {})} */
                        >
                            <SpriteImg
                                widthSource={32}
                                heightSource={32}
                                backgroundURL={`${__STATIC_URL__}/bar_icons/navbar_sprite.png`}
                                offsetX={item.ImgOffsetX}
                                offsetY={item.ImgOffsetY}
                                /* zoom={0.625} */
                                fallback=<Skeleton height={32} width={32} />
                            />
                        </AppLink>
                        <Text
                            className={cls.text}
                            title={t(item.text)}
                            theme={TextTheme.INVERTED}
                            HeaderTag="h2"
                            size={TextSize.S}
                            minLineHeight
                        />
                    </li>
                ))}
            </ul>

            <Popover
                className={className}
                direction="bottom left"
                trigger={
                    <SpriteImg
                        widthSource={32}
                        heightSource={32}
                        backgroundURL={`${__STATIC_URL__}/bar_icons/navbar_sprite.png`}
                        offsetX={128}
                        offsetY={0}
                        /* zoom={0.625} */
                        fallback=<Skeleton height={32} width={32} />
                    />
                }
            >
                <VStack gap="8" align="center">
                    <LangSwitcher theme={ButtonTheme.CLEAR} />
                    <ThemeSwitcher />
                </VStack>
            </Popover>
        </nav>
    );
});
