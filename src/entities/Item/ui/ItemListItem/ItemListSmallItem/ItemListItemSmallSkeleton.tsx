import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ItemListSmallItem.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface ItemListItemSkeletonProps {
    className?: string;
}

export const ItemListItemSmallSkeleton = memo(
    (props: ItemListItemSkeletonProps) => {
        const { className } = props;
        return (
            <div
                className={classNames('', {}, [
                    className,
                    cls.ItemListSmallItem,
                ])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={355}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <HStack justify="between" align="center">
                        <Skeleton width={300} height={20} />
                        <Skeleton width={30} height={30} />
                    </HStack>

                    <HStack justify="around" className={cls.infoWrapper}>
                        <Skeleton width={130} height={20} />
                        <Skeleton width={70} height={20} />
                    </HStack>
                </Card>
            </div>
        );
    },
);
