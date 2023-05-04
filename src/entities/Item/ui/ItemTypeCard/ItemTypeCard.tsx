import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemTypeCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { ItemType } from '../../model/consts/ItemList';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteItems } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { ItemTypeUI } from '../ItemTypeUI/ItemTypeUI';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';
import ItemIcon from '@/shared/assets/icons/app-icon.svg';

interface ItemTypeCardProps {
    className?: string;
    itemType: ItemType;
    target?: HTMLAttributeAnchorTarget;
}

export const ItemTypeCard = memo((props: ItemTypeCardProps) => {
    const { className, itemType, target } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            target={target}
            to={getRouteItems(itemType.type)}
            className={classNames(cls.ItemTypeCard, {}, [className])}
            data-testid="ItemListItem"
            preventChangeOpacity
        >
            <ItemTypeUI type={itemType.type} />
            <Card shadow>
                <AppImage
                    src={itemType.img}
                    className={classNames('', {}, [className])}
                    errorFallback={
                        <Icon
                            Svg={ItemIcon}
                            width={355}
                            height={200}
                            opacity={0.7}
                        />
                    }
                    fallback={
                        <div>
                            <Skeleton width={200} height={200} />
                        </div>
                    }
                />
            </Card>
        </AppLink>
    );
});
