import { memo, MouseEventHandler, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemLike.module.scss';
import { Icon } from '@/shared/ui/Icon';
import FavouriteIcon from '@/shared/assets/icons/like.svg';
import { Item } from '../../model/types/item';
import { LOCAL_STORAGE_ITEMS_LIKE } from '@/shared/const/localstorage';

interface ItemLikeProps {
    className?: string;
    item: Item;
}

export const ItemLike = memo((props: ItemLikeProps) => {
    const { className, item } = props;
    const getLikesItem = () =>
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS_LIKE) || '{}');
    const getIsLiked = item.id in getLikesItem();
    const [isLiked, setIsLiked] = useState(getIsLiked);
    const onclickHandler: MouseEventHandler<SVGSVGElement> = (event) => {
        event.preventDefault();
        const likesItem = getLikesItem();
        if (isLiked) {
            delete likesItem[item.id];
            localStorage.setItem(
                LOCAL_STORAGE_ITEMS_LIKE,
                JSON.stringify(likesItem),
            );
            setIsLiked(false);
        } else {
            localStorage.setItem(
                LOCAL_STORAGE_ITEMS_LIKE,
                JSON.stringify({ ...likesItem, [item.id]: '' }),
            );
            setIsLiked(true);
        }
    };
    return (
        <Icon
            width={25}
            height={24}
            onClick={onclickHandler}
            Svg={FavouriteIcon}
            className={classNames(cls.ItemLike, { [cls.isLiked]: isLiked }, [
                className,
            ])}
        />
    );
});
