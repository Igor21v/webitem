import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ItemListMobileItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ItemListItemSkeletonProps {
    className?: string;
}

export const ItemListItemMobileSkeleton = memo(
    (props: ItemListItemSkeletonProps) => {
        const { isScreenMd, isScreenSm } = useResizeWindow();
        const { t } = useTranslation();
        const { className } = props;

        if (isScreenMd)
            return (
                <div
                    className={classNames(cls.ItemListBigItem, {}, [className])}
                    data-testid="ItemListItem"
                >
                    <Card shadow>
                        <HStack gap="16">
                            <div className={cls.imgWrapper}>
                                <Skeleton width={444} height={250} />
                            </div>
                            <VStack
                                max
                                justify="between"
                                align="center"
                                className={cls.description}
                            >
                                <Skeleton width={400} height={30} />
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Show animation')}
                                </Button>
                                <Skeleton width={115} height={20} />
                                <Skeleton width={90} height={20} />
                                <Skeleton width={60} height={20} />

                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('View the source code')}
                                </Button>
                                <Skeleton
                                    width={25}
                                    height={24}
                                    className={cls.itemLike}
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
                    <Skeleton width={290} height={32} />
                    <div className={cls.imgWrapper}>
                        <Skeleton
                            width={isScreenSm ? 444 : 290}
                            height={isScreenSm ? 250 : 165}
                        />
                    </div>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.animateHandler}
                    >
                        {t('Show animation')}
                    </Button>
                    <Skeleton width={115} height={24} />
                    <Skeleton width={90} height={24} />
                    <Skeleton width={60} height={24} />
                    <Button theme={ButtonTheme.OUTLINE}>
                        {t('View the source code')}
                    </Button>
                    <Skeleton width={25} height={24} className={cls.itemLike} />
                </VStack>
            </Card>
        );
    },
);
