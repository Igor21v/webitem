import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { getRoute, langType } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListSmallItem.module.scss';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { HStack } from '@/shared/ui/Stack';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';
import { ItemLike } from '../../ItemLike/ItemLike';

export const ItemListSmallItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const [isHover, { onMouseEnter, onMouseLeave }] = useHover();
    const { i18n } = useTranslation();
    return (
        <AppLink
            target={target}
            to={getRoute('item_details', i18n.language as langType, item.id)}
            className={classNames('', {}, [className, cls.ItemListSmallItem])}
            data-testid="ItemListItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            preventChangeOpacity
        >
            <Card shadow>
                <div className={cls.imageWrapper}>
                    {/* <ItemCoverImg
                        item={item}
                        width={355}
                        height={200}
                        className={cls.img}
                        animateOn={isHover}
                    /> */}
                    <img
                        src="https://webitem.ru/static/items/Houdini%20gradient%20border%20animation.png"
                        width={355}
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
