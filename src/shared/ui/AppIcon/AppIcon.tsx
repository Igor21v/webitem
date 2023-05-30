import { memo } from 'react';
import AppIconSVG from '@/../public/favicon.svg';
import { Icon, IconProps } from '../Icon';

interface AppIconProps extends Omit<IconProps, 'Svg'> {
    className?: string;
}

export const AppIcon = memo((props: AppIconProps) => {
    const { className } = props;
    return (
        <Icon
            Svg={AppIconSVG}
            height={30}
            width={30}
            inverted
            className={className}
        />
    );
});
