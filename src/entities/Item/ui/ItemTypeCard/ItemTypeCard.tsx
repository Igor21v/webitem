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
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

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
            <Card shadow role="link">
                <VStack gap="8" align="center">
                    <ItemTypeUI
                        type={itemType.type}
                        align={TextAlign.CENTER}
                        size={TextSize.L}
                        theme={TextTheme.BRIGHT}
                    />
                    <AppImage
                        src={itemType.img}
                        className={classNames(cls.img, {}, [className])}
                        errorFallback={
                            <Icon
                                Svg={ItemIcon}
                                width={300}
                                height={172}
                                opacity={0.7}
                            />
                        }
                        fallback={
                            <div>
                                <Skeleton width={300} height={172} />
                            </div>
                        }
                    />
                </VStack>
            </Card>
        </AppLink>
    );
});
