import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListSmallItem.module.scss';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import FavouriteIcon from '@/shared/assets/icons/favourite-20-20.svg';
import { HStack } from '@/shared/ui/Stack';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';
import { ItemCoverImg } from '../../ItemCoverImg/ItemCoverImg';

export const ItemListSmallItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const [isHover, { onMouseEnter, onMouseLeave }] = useHover();
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
                    <ItemCoverImg
                        item={item}
                        width={355}
                        className={cls.img}
                        animateOn={isHover}
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
