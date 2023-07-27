import { CSSProperties, memo, ReactElement } from 'react';
import { ItemListItem } from '../ItemListItem/ItemListItem/ItemListItem';
import cls from './ItemListInfinite.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';
import { ITEM_SMALL_WIDTH } from '@/shared/const/dimensions';
import { HStack } from '@/shared/ui/Stack';

interface ItemListInfiniteRenderItemProps {
    items: Item[];
    view?: ItemView;
    hasNextPage?: boolean;
    filters: ReactElement;
    pageWidth: number;
    index: number;
    style: CSSProperties;
}

export const ItemListInfiniteRenderItem = memo(
    (props: ItemListInfiniteRenderItemProps) => {
        const {
            items,
            view = ItemView.SMALL,
            hasNextPage,
            filters,
            pageWidth,
            index,
            style,
        } = props;
        let itemsInRow: number;
        if (view === ItemView.BIG) {
            itemsInRow = 1;
        } else {
            itemsInRow = Math.floor(
                (pageWidth - 65 + 20) / (ITEM_SMALL_WIDTH + 20),
            ); // 65 = пэдинг стр слева 45 + пэдин стр справа 20; 20 = компенсация того что в последнем эл-те в строке не нужен отступ; 20 мэрдж эл-та справа
        }

        const getRow = (indexRow: number) => {
            if (view === ItemView.BIG) {
                return <ItemListItem item={items[indexRow]} view={view} />;
            }
            const arrayItems = new Array(0);
            for (let indexCol = 0; indexCol < itemsInRow; indexCol += 1) {
                if (items[indexRow * itemsInRow + indexCol]) {
                    arrayItems.push(
                        <ItemListItem
                            item={items[indexRow * itemsInRow + indexCol]}
                            view={view}
                            key={indexCol}
                        />,
                    );
                }
            }
            return (
                <HStack gap="20" justify="center">
                    {arrayItems}
                </HStack>
            );
        };
        const rowCount = Math.ceil(items.length / itemsInRow) + 1;
        const isItemLoaded = (index: number) =>
            !hasNextPage || index < rowCount;

        let content;
        if (!isItemLoaded(index)) {
            content = 'Loading...';
        } else if (index === 0) {
            content = filters;
        } else {
            content = getRow(index - 1);
        }
        return (
            <div style={style} className={cls.itemWrapper}>
                {content}
            </div>
        );
    },
);
