import { useTranslation } from 'react-i18next';
import {
    CSSProperties,
    HTMLAttributeAnchorTarget,
    memo,
    ReactElement,
} from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ItemListItemSkeleton } from '../ItemListItem/ItemListItem/ItemListItemSkeleton';
import { ItemListItem } from '../ItemListItem/ItemListItem/ItemListItem';
import cls from './ItemListInfinite.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';

interface ItemListInfiniteProps {
    className?: string;
    classNameCard?: string;
    items?: Item[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ItemView;
    hasNextPage?: boolean;
    loadNextPage: () => void;
    filters: ReactElement;
}

const getSkeletons = (view: ItemView) =>
    new Array(view === ItemView.SMALL ? 20 : 4)
        .fill(0)
        .map((item, index) => (
            <ItemListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ItemListInfinite = memo((props: ItemListInfiniteProps) => {
    const {
        className,
        items,
        view = ItemView.SMALL,
        isLoading,
        target,
        classNameCard,
        hasNextPage,
        loadNextPage,
        filters,
    } = props;
    const { t } = useTranslation();

    if (isLoading) getSkeletons(view);

    if (!items?.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                {filters}
                <Text size={TextSize.L} title={t('Elements not found')} />
            </div>
        );
    }

    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index: number) =>
        !hasNextPage || index < items.length;

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
            content = (
                <ItemListItem
                    item={items[index]}
                    view={view}
                    target={target}
                    className={classNames(cls.card, {}, [classNameCard])}
                />
            );
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
                        itemCount={itemCount + 1}
                        loadMoreItems={loadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <FixedSizeList
                                itemCount={itemCount}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                height={height || 0}
                                width={width || 0}
                                itemSize={294}
                            >
                                {itemFuncRender}
                            </FixedSizeList>
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </div>
    );
});
