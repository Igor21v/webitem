import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ItemListBigItem.module.scss';

interface ItemListItemSkeletonProps {
    className?: string;
}

export const ItemListItemBigSkeleton = memo(
    (props: ItemListItemSkeletonProps) => {
        const { className } = props;
        return (
            <div className={classNames('', {}, [className])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={150} height={24} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.data}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.languages}
                    />
                    <Skeleton height={250} className={cls.img} />
                    <Skeleton
                        width={300}
                        height={24}
                        className={cls.textBlock}
                    />
                    <div className={cls.fotter}>
                        <Skeleton width={200} height={36} />
                        <Skeleton width={60} height={24} />
                    </div>
                </Card>
            </div>
        );
    },
);
