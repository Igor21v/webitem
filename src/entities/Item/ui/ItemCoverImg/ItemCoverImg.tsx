import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';
import { Item } from '../../model/types/item';
import { OptionAnimate } from '@/shared/ui/OptionAnimate';
import ItemIcon from '@/../public/favicon.svg';

interface ItemCoverImgProps {
    className?: string;
    animateOn?: boolean;
    width?: number;
    height?: number;
    item: Item;
}

export const ItemCoverImg = memo((props: ItemCoverImgProps) => {
    const { className, animateOn, item, width, height } = props;
    return (
        <OptionAnimate
            animateOn={animateOn}
            animateSrc={`${__STATIC_URL__}/items/${item.title}.gif`}
            src={`${__STATIC_URL__}/items/${item.title}.png`}
            className={className}
            alt={item.title}
            fallback={
                <div>
                    <Skeleton width={width} height={height} />
                </div>
            }
            errorFallback={
                <Icon
                    Svg={ItemIcon}
                    width={width}
                    height={height}
                    opacity={0.7}
                />
            }
        />
    );
});
