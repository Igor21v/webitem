import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ItemListBigItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ItemListItemSkeletonProps {
    className?: string;
}

export const ItemListItemBigSkeleton = memo(
    (props: ItemListItemSkeletonProps) => {
        const { className } = props;
        return (
            <div className={classNames(cls.ItemListBigItem, {}, [className])}>
                <Card>
                    <HStack>
                        <div className={cls.img}>
                            <Skeleton width={444} height={250} />
                        </div>
                        <div className={cls.skeletonText}>
                            <VStack
                                max
                                justify="between"
                                align="center"
                                className={cls.description}
                            >
                                <Skeleton width={170} height={24} />
                                <Skeleton width={200} height={20} />
                                <Skeleton width={170} height={20} />
                                <Skeleton width={170} height={20} />
                                <Skeleton width={170} height={20} />
                                <Skeleton width={170} height={28} />
                                <Skeleton
                                    width={30}
                                    height={30}
                                    className={cls.itemLike}
                                />
                            </VStack>
                        </div>
                    </HStack>
                </Card>
            </div>
        );
    },
);
