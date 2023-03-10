import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteMain } from '@/shared/const/router';
import { Icon } from '@/shared/ui/Icon';
import AppIcon from '@/shared/assets/icons/app-icon.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const authData = useSelector(getUserAuthData);
    const navbarItemsList = useSelector(getNavbarItems);
    const content = (
        <>
            <AppLink to={getRouteMain()} className={cls.appName}>
                <HStack gap="16">
                    <Text theme={TextTheme.INVERTED} title={t('webitem')} />
                    <Icon Svg={AppIcon} inverted />
                    <Text
                        theme={TextTheme.INVERTED}
                        title={t('Elements for your website')}
                        size={TextSize.S}
                    />
                </HStack>
            </AppLink>

            <HStack role="navigation" gap="32">
                {navbarItemsList.map((item) => (
                    <NavbarItem {...item} key={item.path} />
                ))}
            </HStack>
        </>
    );
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                {content}
                <HStack gap="16">
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {content}
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('sign-in')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
