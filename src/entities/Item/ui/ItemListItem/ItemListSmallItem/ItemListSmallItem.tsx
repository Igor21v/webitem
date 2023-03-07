import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListSmallItem.module.scss';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { HStack } from '@/shared/ui/Stack';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';
import { ItemCoverImg } from '../../ItemCoverImg/ItemCoverImg';
import { ItemLike } from '../../ItemLike/ItemLike';

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
                        height={250}
                        className={cls.img}
                        animateOn={isHover}
                    />
                    <Text text={item.createdAt} className={cls.date} />
                </div>
                <HStack justify="between" align="center">
                    <Text text={item.title} className={cls.title} />
                    <ItemLike itemId={item.id} />
                </HStack>
                <HStack justify="around" className={cls.infoWrapper}>
                    {languages}
                    {views}
                </HStack>
            </Card>
        </AppLink>
    );
});
