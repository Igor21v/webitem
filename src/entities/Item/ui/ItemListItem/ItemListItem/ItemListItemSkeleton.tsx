import { memo } from 'react';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { ItemView } from '../../../model/consts/ItemConst';
import { ItemListItemBigSkeleton } from '../ItemListBigItem/ItemListItemBigSkeleton';
import { ItemListItemMobileSkeleton } from '../ItemListMobileItem/ItemListMobileItemSkeleton';
import { ItemListItemSmallSkeleton } from '../ItemListSmallItem/ItemListItemSmallSkeleton';

interface ItemListItemSkeletonProps {
    className?: string;
    view: ItemView;
}

export const ItemListItemSkeleton = memo((props: ItemListItemSkeletonProps) => {
    const { className, view } = props;
    const { isScreenXl, isScreenMd } = useResizeWindow();
    if (!isScreenXl)
        return <ItemListItemMobileSkeleton className={className} />;
    if (view === ItemView.BIG) {
        return <ItemListItemBigSkeleton className={className} />;
    }
    return <ItemListItemSmallSkeleton className={className} />;
});
