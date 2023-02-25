import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ItemRatingProps } from './ItemRating';

const ItemRatingLazy = lazy(() => import('./ItemRating'));

export const ItemRatingAsync = (props: ItemRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ItemRatingLazy {...props} />
        </Suspense>
    );
};
