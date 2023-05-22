import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteItemDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ItemListMobileItem.module.scss';
import { ItemListSpecItemProps } from '../ItemListItem/ItemListItem';
import { ItemCoverImg } from '../../ItemCoverImg/ItemCoverImg';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ItemLike } from '../../ItemLike/ItemLike';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

export const ItemListMobileItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const { t } = useTranslation();
    const [animateOn, setAnimateOn] = useState(false);
    const { isScreenXl, isScreenMd } = useResizeWindow();
    const animateHandler = useCallback(() => {
        setAnimateOn((value) => !value);
    }, []);
    const animateButtonText = useCallback(
        () => (animateOn ? t('Hide animation') : t('Show animation')),
        [animateOn, t],
    );
    const title = (
        <Text
            title={item.title}
            align={TextAlign.CENTER}
            className={cls.title}
            classNameTitle={cls.titleText}
        />
    );

    if (isScreenMd)
        return (
            <div
                className={classNames(cls.ItemListBigItem, {}, [className])}
                data-testid="ItemListItem"
            >
                <Card shadow>
                    <HStack gap="16">
                        <div className={cls.imgWrapper}>
                            <ItemCoverImg
                                item={item}
                                width={444}
                                height={250}
                                className={cls.img}
                                animateOn={animateOn}
                            />
                        </div>
                        <VStack
                            max
                            justify="between"
                            align="center"
                            className={cls.description}
                        >
                            {title}
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={animateHandler}
                            >
                                {animateButtonText()}
                            </Button>
                            {languages}
                            <Text text={item.createdAt} />
                            {views}

                            <AppLink
                                target={target}
                                to={getRouteItemDetails(item.id)}
                            >
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('View the source code')}
                                </Button>
                            </AppLink>
                            <ItemLike
                                className={cls.itemLike}
                                itemId={item.id}
                            />
                        </VStack>
                    </HStack>
                </Card>
            </div>
        );
    return (
        <Card
            shadow
            className={classNames(cls.ItemListBigItem, {}, [className])}
            data-testid="ItemListItem"
        >
            <VStack justify="center" align="center" className={cls.vStack}>
                {title}
                <div className={cls.imgWrapper}>
                    <ItemCoverImg
                        item={item}
                        className={cls.img}
                        animateOn={animateOn}
                    />
                </div>
                <Button theme={ButtonTheme.OUTLINE} onClick={animateHandler}>
                    {animateButtonText()}
                </Button>
                {languages}
                <Text text={item.createdAt} />
                {views}

                <AppLink target={target} to={getRouteItemDetails(item.id)}>
                    <Button theme={ButtonTheme.OUTLINE}>
                        {t('View the source code')}
                    </Button>
                </AppLink>
                <ItemLike className={cls.itemLike} itemId={item.id} />
            </VStack>
        </Card>
    );
});
