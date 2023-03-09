import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ItemDetails.module.scss';

export const ItemDetailsSkeleton = memo(() => (
    <>
        <Skeleton
            className={cls.itemImage}
            width={200}
            height={200}
            border="50%"
        />
        <VStack gap="16">
            <Skeleton width={300} height={32} />
            <Skeleton width={600} height={24} />
        </VStack>
        <HStack max justify="between">
            <Skeleton width={200} height={18} />
            <Skeleton width={25} height={24} />
        </HStack>
        <Skeleton width={200} height={18} />
        <Skeleton width={100} height={18} />
        <VStack max gap="4">
            <HStack justify="between" align="end" max>
                <HStack gap="8">
                    <Skeleton width={60} height={56} border="20%" />
                    <Skeleton width={60} height={56} border="20%" />
                    <Skeleton width={60} height={56} border="20%" />
                </HStack>
                <Skeleton width={200} height={24} />
            </HStack>
            <Skeleton width="100%" height={400} />
        </VStack>
    </>
));
