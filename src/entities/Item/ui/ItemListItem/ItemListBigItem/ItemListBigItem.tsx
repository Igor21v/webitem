import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListBigItem.module.scss';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';
import { ItemCoverImg } from '../../ItemCoverImg/ItemCoverImg';
import { HStack, VStack } from '@/shared/ui/Stack';

export const ItemListBigItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const { t } = useTranslation();
    return (
        <div
            className={classNames('', {}, [className])}
            data-testid="ItemListItem"
        >
            <Card shadow>
                <HStack max>
                    <ItemCoverImg
                        item={item}
                        width={444}
                        className={cls.img}
                        animateOn
                    />
                    <VStack
                        max
                        justify="between"
                        align="center"
                        className={cls.description}
                    >
                        <Text title={item.title} />
                        <Text text={item.createdAt} />
                        {languages}
                        {item.description && (
                            <Text
                                text={item.description}
                                className={cls.textBlock}
                            />
                        )}
                        {views}
                        <AppLink
                            target={target}
                            to={getRouteItemDetails(item.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('View the source code')}
                            </Button>
                        </AppLink>
                    </VStack>
                </HStack>
            </Card>
        </div>
    );
});
