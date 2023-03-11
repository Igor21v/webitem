import { memo } from 'react';
import { ItemView } from '../../../model/consts/ItemConst';
import { ItemListItemBigSkeleton } from '../ItemListBigItem/ItemListItemBigSkeleton';
import { ItemListItemSmallSkeleton } from '../ItemListSmallItem/ItemListItemSmallSkeleton';

interface ItemListItemSkeletonProps {
    className?: string;
    view: ItemView;
}

export const ItemListItemSkeleton = memo((props: ItemListItemSkeletonProps) => {
    const { className, view } = props;
    if (view === ItemView.BIG) {
        return <ItemListItemBigSkeleton className={className} />;
    }
    return <ItemListItemSmallSkeleton className={className} />;
});
