import { CSSProperties, memo, ReactElement } from 'react';
import { VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ItemListItem } from '../ItemListItem/ItemListItem/ItemListItem';
import cls from './ItemListInfinite.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';
import { ITEM_SMALL_WIDTH } from '@/shared/const/dimensions';
import { HStack } from '@/shared/ui/Stack';

interface ItemListInfiniteProps {
    className?: string;
    items: Item[];
    isLoading?: boolean;
    view?: ItemView;
    hasNextPage?: boolean;
    loadNextPage: () => void;
    filters: ReactElement;
    pageWidth: number;
}

export const ItemListInfinite = memo((props: ItemListInfiniteProps) => {
    const {
        className,
        items,
        view = ItemView.SMALL,
        isLoading,
        hasNextPage,
        loadNextPage,
        filters,
        pageWidth,
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
    const itemCount = hasNextPage ? rowCount + 1 : rowCount;
    const loadMoreItems = isLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index: number) => !hasNextPage || index < rowCount;

    const getItemSize = (index: number) => {
        if (index === 0) return 135;
        if (view === ItemView.BIG) return 300;
        return 320;
    };

    const itemFuncRender = ({
        index,
        style,
    }: {
        index: number;
        style: CSSProperties;
    }) => {
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
    };

    return (
        <div
            className={classNames(cls.ItemListInfinite, {}, [className])}
            data-testid="ItemList"
        >
            <AutoSizer>
                {({ height, width }) => (
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={itemCount}
                        loadMoreItems={loadMoreItems}
                        threshold={10}
                    >
                        {({ onItemsRendered, ref }) => (
                            <VariableSizeList
                                itemCount={itemCount}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                height={height || 0}
                                width={width || 0}
                                itemSize={getItemSize}
                            >
                                {itemFuncRender}
                            </VariableSizeList>
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </div>
    );
});
