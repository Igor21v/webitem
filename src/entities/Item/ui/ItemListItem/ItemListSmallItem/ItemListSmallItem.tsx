import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListSmallItem.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import ItemIcon from '@/shared/assets/icons/item.svg';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { HoverImage } from '@/shared/ui/HoverImage';
import FavouriteIcon from '@/shared/assets/icons/favourite-20-20.svg';
import { HStack } from '@/shared/ui/Stack';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';

export const ItemListSmallItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const [isHover, { onMouseEnter, onMouseLeave }] = useHover();
    const { t } = useTranslation();
    return (
        <AppLink
            target={target}
            to={getRouteItemDetails(item.id)}
            className={classNames('', {}, [className, cls.ItemListSmallItem])}
            data-testid="ItemListItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            preventChangeOpacity
        >
            <Card shadow>
                <div className={cls.imageWrapper}>
                    <HoverImage
                        isHover={isHover}
                        animateSrc={item.imgAnim}
                        src={item.img}
                        className={cls.img}
                        alt={item.title}
                        fallback={<Skeleton width={200} height={355} />}
                        errorFallback={
                            <Icon
                                Svg={ItemIcon}
                                width={355}
                                height={200}
                                opacity={0.7}
                            />
                        }
                    />
                    <Text text={item.createdAt} className={cls.date} />
                </div>
                <HStack justify="between" align="center">
                    <Text text={item.title} className={cls.title} />
                    <Icon
                        Svg={FavouriteIcon}
                        height={30}
                        className={cls.favIcon}
                    />
                </HStack>
                <HStack justify="around" className={cls.infoWrapper}>
                    {languages}
                    {views}
                </HStack>
            </Card>
        </AppLink>
    );
});
