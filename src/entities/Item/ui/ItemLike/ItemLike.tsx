import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemLike.module.scss';
import { Icon } from '@/shared/ui/Icon';
import FavouriteIcon from '@/shared/assets/icons/favourite-20-20.svg';

interface ItemLikeProps {
    className?: string;
}

export const ItemLike = memo((props: ItemLikeProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Icon
            Svg={FavouriteIcon}
            height={30}
            className={classNames(cls.ItemLike, {}, [className])}
        />
    );
});
