import { memo } from 'react';
import AppIconSVG from '@/../public/favicon.svg';
import { Icon, IconProps } from '../Icon';

export const AppIcon = memo((props: Omit<IconProps, 'Svg' | 'ref'>) => {
    const { className, ...rest } = props;
    return <Icon Svg={AppIconSVG} className={className} {...rest} />;
});
