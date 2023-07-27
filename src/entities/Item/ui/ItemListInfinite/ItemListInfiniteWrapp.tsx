import { useTranslation } from 'react-i18next';
import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import cls from './ItemListInfinite.module.scss';
import { Item } from '../../model/types/item';
import { ItemView } from '../../model/consts/ItemConst';
import { ItemListSkeletons } from './ItemListSkeletons';
import { ItemListInfinite } from './ItemListInfinite';

interface ItemListInfiniteWrapProps {
    className?: string;
    items?: Item[];
    isLoading?: boolean;
    view?: ItemView;
    hasNextPage?: boolean;
    loadNextPage: () => void;
    filters: ReactElement;
    pageWidth: number;
}

export const ItemListInfiniteWrapp = memo(
    (props: ItemListInfiniteWrapProps) => {
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
        const { t } = useTranslation();

        if (isLoading && !items?.length)
            return (
                <>
                    <div className={cls.skeletonFilters}>{filters}</div>
                    <div className={classNames('', {}, [cls[view], className])}>
                        {ItemListSkeletons(view)}
                    </div>
                </>
            );

        if (!items?.length) {
            return (
                <>
                    {filters}
                    <Text
                        size={TextSize.L}
                        align={TextAlign.CENTER}
                        title={t('Elements not found')}
                    />
                </>
            );
        }

        return (
            <ItemListInfinite
                isLoading={isLoading}
                view={view}
                items={items}
                className={className}
                loadNextPage={loadNextPage}
                hasNextPage={hasNextPage}
                filters={filters}
                pageWidth={pageWidth}
            />
        );
    },
);
