import { useTranslation } from 'react-i18next';
import { memo, MutableRefObject, useEffect, useRef, useState } from 'react';
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
import { ItemLike } from '../../ItemLike/ItemLike';

type AnyTODO = any;

export const ItemListBigItem = memo((props: ItemListSpecItemProps) => {
    const { className, item, target, languages, views } = props;
    const { t } = useTranslation();
    const triggerElement = useRef() as MutableRefObject<HTMLDivElement>;
    const [animateOn, setAnimateOn] = useState(false);
    const intersectionHandler = (entries: AnyTODO[]) => {
        entries.forEach((entry) => {
            const { isIntersecting } = entry;
            if (isIntersecting) {
                setAnimateOn(true);
            } else {
                setAnimateOn(false);
            }
        });
    };
    useEffect(() => {
        const options = {
            rootMargin: '-30px',
            threshold: [1],
        };
        const observer = new IntersectionObserver(intersectionHandler, options);
        observer.observe(triggerElement.current);
    }, []);

    return (
        <div
            className={classNames(cls.ItemListBigItem, {}, [className])}
            data-testid="ItemListItem"
            ref={triggerElement}
        >
            <Card shadow>
                <HStack>
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
                        <Text title={item.title} />
                        {item.description && (
                            <Text
                                text={item.description}
                                className={cls.textBlock}
                            />
                        )}
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
                        <ItemLike className={cls.itemLike} itemId={item.id} />
                    </VStack>
                </HStack>
            </Card>
        </div>
    );
});
