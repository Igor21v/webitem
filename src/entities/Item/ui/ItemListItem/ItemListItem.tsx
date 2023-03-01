import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListItem.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import ItemIcon from '@/shared/assets/icons/item.svg';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { HoverImage } from '@/shared/ui/HoverImage';

interface ItemListItemProps {
    className?: string;
    item: Item;
    view: ItemView;
    target?: HTMLAttributeAnchorTarget;
}

export const ItemListItem = memo((props: ItemListItemProps) => {
    const { className, item, view, target } = props;
    const { t } = useTranslation();
    const languages = (
        <Text text={Object.keys(item.codes).join(', ')} className={cls.types} />
    );
    const views = (
        <>
            <Text text={String(item.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    const [isHover, { onMouseEnter, onMouseLeave }] = useHover();
    if (view === ItemView.BIG) {
        return (
            <div
                className={classNames('', {}, [className, cls[view]])}
                data-testid="ItemListItem"
            >
                <Card>
                    <div className={cls.header}>
                        <Text title={item.title} />
                        <Text text={item.createdAt} className={cls.data} />
                    </div>
                    {languages}
                    <AppImage
                        src={item.img}
                        className={cls.img}
                        alt={item.title}
                        fallback={<Skeleton width="100%" height={250} />}
                        errorFallback={
                            <Icon
                                Svg={ItemIcon}
                                width="100%"
                                height={250}
                                opacity={0.7}
                            />
                        }
                    />
                    {item.description && (
                        <Text
                            text={item.description}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.fotter}>
                        <AppLink
                            target={target}
                            to={getRouteItemDetails(item.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('View the code')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteItemDetails(item.id)}
            className={classNames('', {}, [className, cls[view]])}
            data-testid="ItemListItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <HoverImage
                        isHover={isHover}
                        animateSrc={item.imgAnim}
                        src={item.img}
                        className={cls.img}
                        alt={item.title}
                        fallback={<Skeleton width={200} height={200} />}
                        errorFallback={
                            <Icon
                                Svg={ItemIcon}
                                width={200}
                                height={200}
                                opacity={0.7}
                            />
                        }
                    />
                    <Text text={item.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {languages}
                    {views}
                </div>
                <Text text={item.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
