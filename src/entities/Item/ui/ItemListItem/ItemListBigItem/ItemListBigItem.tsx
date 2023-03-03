import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListBigItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import ItemIcon from '@/shared/assets/icons/item.svg';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';

export const ItemListBigItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const { t } = useTranslation();
    return (
        <div
            className={classNames('', {}, [className])}
            data-testid="ItemListItem"
        >
            <Card shadow>
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
                    <Text text={item.description} className={cls.textBlock} />
                )}
                <div className={cls.fotter}>
                    <AppLink target={target} to={getRouteItemDetails(item.id)}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('View the code')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        </div>
    );
});
