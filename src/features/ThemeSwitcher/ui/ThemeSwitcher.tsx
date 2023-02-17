import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <Icon Svg={ThemeSwitcherIcon} inverted />
        </Button>
    );
});
