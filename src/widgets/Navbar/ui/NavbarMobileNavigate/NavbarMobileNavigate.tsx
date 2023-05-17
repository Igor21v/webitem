import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarMobileNavigate.module.scss';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { SpriteImg } from '@/shared/ui/SpriteImg';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

interface NavbarMobileNavigateProps {
    className?: string;
}

export const NavbarMobileNavigate = memo(
    ({ className }: NavbarMobileNavigateProps) => {
        const { t } = useTranslation();
        const navbarItemsList = useSelector(getNavbarItems);

        useEffect(() => {
            const root = document.documentElement;
            root.style.setProperty('--active-navbar', '');
            const items = Array.from(document.querySelectorAll('li'));
            const itemHandler = (item: any, index: any) => {
                root.style.setProperty('--active-navbar', index.toString());
                root.querySelectorAll('[data-active-navbar]').forEach((el) =>
                    el.removeAttribute('data-active-navbar'),
                );
                item.setAttribute('data-active-navbar', 'true');
            };
            items.forEach((item, index) => {
                if (index === 0)
                    item.setAttribute('data-active-navbar', 'true');
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
        }, []);

        return (
            <nav className={classNames(cls.NavbarMobile, {}, [className])}>
                <ul className={cls.ul}>
                    <div className={cls.bar} />
                    {navbarItemsList.map((item) => (
                        <li className={cls.li} key={item.path}>
                            <AppLink
                                theme={AppLinkTheme.SECONDARY}
                                to={item.path}
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
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        );
    },
);
