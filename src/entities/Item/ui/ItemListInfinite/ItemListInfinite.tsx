/* eslint-disable react/no-unused-prop-types */
import { CSSProperties, memo, ReactElement } from 'react';
import { VariableSizeList, areEqual } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemListInfinite.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';
import { ITEM_SMALL_WIDTH } from '@/shared/const/dimensions';
import { ItemListInfiniteRenderItem } from './ItemListInfiniteRenderItem';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

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
    const { isScreenXl, isScreenSm, isScreenMd } = useResizeWindow();
    if (view === ItemView.BIG) {
        itemsInRow = 1;
    } else {
        itemsInRow = Math.floor(
            (pageWidth - 65 + 20) / (ITEM_SMALL_WIDTH + 20),
        ); // 65 = пэдинг стр слева 45 + пэдин стр справа 20; 20 = компенсация того что в последнем эл-те в строке не нужен отступ; 20 мэрдж эл-та справа
    }

    const rowCount = Math.ceil(items.length / itemsInRow) + 1;
    const itemCount = hasNextPage ? rowCount + 1 : rowCount;
    const loadMoreItems = isLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index: number) => !hasNextPage || index < rowCount;
    const getItemSize = (index: number) => {
        if (index === 0) {
            if (!isScreenSm) return 225;
            if (!isScreenXl) return 175;
            return 155;
        }
        if (!isScreenSm) return 400;
        if (!isScreenMd) return 480;
        if (view === ItemView.BIG) return 300;
        return 320;
    };

    // eslint-disable-next-line react/no-unstable-nested-components
    const itemFuncRender = memo(
        ({ index, style }: { index: number; style: CSSProperties }) => (
            <ItemListInfiniteRenderItem
                filters={filters}
                index={index}
                items={items}
                pageWidth={pageWidth}
                style={style}
                hasNextPage={hasNextPage}
                view={view}
            />
        ),
        areEqual,
    );

    return (
        <div
            className={classNames(cls.ItemListInfinite, {}, [className])}
            data-testid="ItemList"
        >
            <AutoSizer>
                {({ height, width }: { height: number; width: number }) => (
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
