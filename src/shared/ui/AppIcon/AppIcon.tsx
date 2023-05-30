import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import AppIconSVG from '@../../../public/favicon.svg';
import { Icon, IconProps } from '../Icon';

interface AppIconProps extends Partial<IconProps> {
    className?: string;
}

export const AppIcon = memo((props: AppIconProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return <Icon Svg={AppIconSVG} height={30} width={30} inverted />;
});
