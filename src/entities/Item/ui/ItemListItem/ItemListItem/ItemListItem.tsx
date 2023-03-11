import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import cls from './ItemListItem.module.scss';
import { Item } from '../../../model/types/item';
import { ItemView } from '../../../model/consts/ItemConst';
import { ItemListBigItem } from '../ItemListBigItem/ItemListBigItem';
import { ItemListSmallItem } from '../ItemListSmallItem/ItemListSmallItem';
import { HStack } from '@/shared/ui/Stack';

interface ItemListItemProps {
    className?: string;
    item: Item;
    view?: ItemView;
    target?: HTMLAttributeAnchorTarget;
}

export interface ItemListSpecItemProps extends ItemListItemProps {
    views: ReactNode;
    languages: ReactNode;
}

export const ItemListItem = memo((props: ItemListItemProps) => {
    const { className, item, view, target } = props;
    const languages = (
        <Text text={Object.keys(item.codes).join(', ')} className={cls.types} />
    );
    const views = (
        <HStack>
            <Text text={String(item.views)} />
            <Icon Svg={EyeIcon} />
        </HStack>
    );

    if (view === ItemView.BIG) {
        return (
            <ItemListBigItem
                className={className}
                item={item}
                target={target}
                views={views}
                languages={languages}
            />
        );
    }
    return (
        <ItemListSmallItem
            className={className}
            item={item}
            target={target}
            views={views}
            languages={languages}
        />
    );
});
