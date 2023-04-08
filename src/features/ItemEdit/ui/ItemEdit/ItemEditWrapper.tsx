import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { itemEditReducer } from '../../model/slice/ItemEditSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchItemById,
    useItemDetailsSelector,
    itemDetailsReducer,
} from '@/entities/Item';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ItemEdit } from './ItemEdit';

interface ItemAddProps {
    className?: string;
    id: string;
}

export const ItemEditWrapper = memo((props: ItemAddProps) => {
    const { className, id } = props;
    const { t } = useTranslation('adminPanel');
    const dispatch = useAppDispatch();
    useInitialEffect(() => {
        dispatch(fetchItemById(id));
    });
    const initItem = useItemDetailsSelector();

    const reducers: ReducersList = {
        itemEdit: itemEditReducer,
        itemDetails: itemDetailsReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Text title={t('Edit item')} />
            {initItem?.data && <ItemEdit initItem={initItem.data} />}
        </DynamicModuleLoader>
    );
});
