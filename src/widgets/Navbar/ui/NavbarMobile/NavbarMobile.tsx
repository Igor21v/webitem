import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarMobile.module.scss';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';
import { Icon } from '@/shared/ui/Icon';
import FavouriteIcon from '@/shared/assets/icons/like.svg';

interface NavbarMobileProps {
    className?: string;
}

export const NavbarMobile = memo(({ className }: NavbarMobileProps) => {
    const { t } = useTranslation();
    const navbarItemsList = useSelector(getNavbarItems);
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll('li'));
    root.style.setProperty('--active', '0');

    items.forEach((item, index) => {
        if (index === 0) item.setAttribute('data-active', 'true');
        item.style.setProperty('--i', index.toString());

        item.addEventListener('click', (e) => {
            root.style.setProperty('--active', index.toString());
            root.querySelectorAll('[data-active]').forEach((el) =>
                el.removeAttribute('data-active'),
            );
            item.setAttribute('data-active', 'true');
        });
    });
    return (
        <header className={classNames(cls.NavbarMobile, {}, [className])}>
            {/* <HStack role="navigation" gap="32">
                {navbarItemsList.map((item) => (
                    <NavbarItem {...item} key={item.path} />
                ))}
            </HStack> */}
            <ul className={cls.ul}>
                <div className={cls.bar} />
                <li className={cls.li}>
                    <div className={cls.icon}>
                        <Icon width={25} height={24} Svg={FavouriteIcon} />
                    </div>
                    <div className={cls.text}>Home</div>
                </li>
                <li className={cls.li}>
                    <div className={cls.icon}>
                        <Icon width={25} height={24} Svg={FavouriteIcon} />
                    </div>
                    <div className={cls.text}>Files</div>
                </li>
                <li className={cls.li}>
                    <div className={cls.icon}>
                        <Icon width={25} height={24} Svg={FavouriteIcon} />
                    </div>
                    <div className={cls.text}>Profile</div>
                </li>
                <li className={cls.li}>
                    <div className={cls.icon}>
                        <Icon width={25} height={24} Svg={FavouriteIcon} />
                    </div>
                    <div className={cls.text}>Layers</div>
                </li>
                <li className={cls.li}>
                    <div className={cls.icon}>
                        <Icon width={25} height={24} Svg={FavouriteIcon} />
                    </div>
                    <div className={cls.text}>Settings</div>
                </li>
            </ul>
        </header>
    );
});
