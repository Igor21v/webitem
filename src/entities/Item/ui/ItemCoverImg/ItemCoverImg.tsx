import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';
import { Item } from '../../model/types/item';
import { HoverImage } from '@/shared/ui/HoverImage';
import ItemIcon from '@/shared/assets/icons/item.svg';

interface ItemCoverImgProps {
    className?: string;
    isHover?: boolean;
    width: number;
    item: Item;
}

export const ItemCoverImg = memo((props: ItemCoverImgProps) => {
    const { className, isHover, item, width } = props;
    return (
        <HoverImage
            isHover={isHover}
            animateSrc={item.imgAnim}
            src={item.img}
            className={className}
            alt={item.title}
            fallback={<Skeleton width={width} height={200} />}
            errorFallback={
                <Icon Svg={ItemIcon} width={width} height={200} opacity={0.7} />
            }
        />
    );
});
