import { memo } from 'react';
import { NavbarMobileNavigate } from '../NavbarMobileNavigate/NavbarMobileNavigate';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

interface NavbarMobileProps {
    className?: string;
}

export const NavbarMobile = memo(({ className }: NavbarMobileProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <HStack>
                <NavbarMobileNavigate />
                {/* <HStack gap="8" align="center">
                    <LangSwitcher short />
                    <ThemeSwitcher />
                </HStack> */}
            </HStack>
        </div>
    );
});
