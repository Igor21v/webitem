import { useTranslation } from 'react-i18next';
import { CSSProperties, HTMLAttributeAnchorTarget, memo } from 'react';
import { FixedSizeList } from 'react-window';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ItemListItemSkeleton } from '../ItemListItem/ItemListItem/ItemListItemSkeleton';
import { ItemListItem } from '../ItemListItem/ItemListItem/ItemListItem';
import cls from './ItemList.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';

interface ItemListProps {
    className?: string;
    classNameCard?: string;
    items?: Item[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ItemView;
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

export const ItemList = memo((props: ItemListProps) => {
    const {
        className,
        items,
        view = ItemView.SMALL,
        isLoading,
        target,
        classNameCard,
    } = props;
    const { t } = useTranslation();

    if (isLoading) getSkeletons(view);

    if (!items?.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Elements not found')} />
            </div>
        );
    }

    /*     const itemsForRender = items?.reduce((result: ReactNode[], item) => {
        if (item) {
            result.push(
                <ItemListItem
                    item={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={classNames(cls.card, {}, [classNameCard])}
                />,
            );
        }
        return result;
    }, []); */

    const itemFuncRender = ({
        index,
        style,
    }: {
        index: number;
        style: CSSProperties;
    }) => (
        <div style={style}>
            <ItemListItem
                item={items[index]}
                view={view}
                target={target}
                /* key={items[index].id} */
                className={classNames(cls.card, {}, [classNameCard])}
            />
            ,
        </div>
    );

    return (
        <div
            className={classNames('', {}, [cls[view], className])}
            data-testid="ItemList"
        >
            <FixedSizeList
                height={1000}
                width={1000}
                itemSize={350}
                itemCount={items.length}
            >
                {itemFuncRender}
            </FixedSizeList>
        </div>
    );
});
