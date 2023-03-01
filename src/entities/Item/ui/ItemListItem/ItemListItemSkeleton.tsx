import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ItemListItem.module.scss';
import { ItemView } from '../../model/consts/ItemConst';

interface ItemListItemSkeletonProps {
    className?: string;
    view: ItemView;
}

export const ItemListItemSkeleton = memo((props: ItemListItemSkeletonProps) => {
    const { className, view } = props;
    if (view === ItemView.BIG) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
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
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} />
            </Card>
        </div>
    );
});
