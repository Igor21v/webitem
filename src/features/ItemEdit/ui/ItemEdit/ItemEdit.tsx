import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { languageType } from '@/shared/types/codes';
import { Button } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    itemAddReducer,
    useItemAddActions,
} from '../../model/slice/ItemEditSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useItemAddSelector } from '../../model/selectors/getItemEditForm/getItemEditForm';

import { itemAdd } from '../../model/services/editItem/editItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    initialState,
    ValidateAddItemError,
} from '../../model/consts/ItemEditConsts';
import { fetchItemById, ItemEditCard, ItemEditType } from '@/entities/Item';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ItemAddProps {
    className?: string;
    id?: string;
}

export const ItemEdit = memo((props: ItemAddProps) => {
    const { className, id } = props;
    const { t } = useTranslation('adminPanel');
    const langTabs = Object.keys(initialState.item.codes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));
    const itemAddState = useItemAddSelector();
    const itemForm = itemAddState.item;
    const { updateItem } = useItemAddActions();
    const dispatch = useAppDispatch();
    const handleAddItem = useCallback(() => {
        dispatch(itemAdd());
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(fetchItemById(id));
    });

    const handleUpdateItem = useCallback(
        (key: keyof ItemEditType) => (value: any) => {
            updateItem({ [key]: value });
        },
        [updateItem],
    );
    const reducers: ReducersList = {
        itemAdd: itemAddReducer,
    };
    const validateErrorTranslates = {
        [ValidateAddItemError.SERVER_ERROR]: t('Server error'),
        [ValidateAddItemError.INCORRECT_TITLE]: t('Enter the title'),
        [ValidateAddItemError.INCORRECT_TYPE]: t('Type not selected'),
        [ValidateAddItemError.INCORRECT_SIZE]: t('Incorrect size'),
        [ValidateAddItemError.SERVER_ERROR]: t('Server error'),
    };

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <VStack gap="8">
                <Text title={t('Add new item')} />
                <ItemEditCard
                    item={itemForm}
                    langTabs={langTabs}
                    handleUpdateItem={handleUpdateItem}
                />
                <HStack gap="8">
                    <Button onClick={handleAddItem}>{t('Add item')}</Button>
                    {itemAddState.fulfilled && (
                        <Text
                            theme={TextTheme.SUCCESS}
                            text={t('The component was successfully added')}
                        />
                    )}
                    {itemAddState.error?.length &&
                        itemAddState.error?.map((err: ValidateAddItemError) => (
                            <Text
                                theme={TextTheme.ERROR}
                                text={`${validateErrorTranslates[err]};`}
                                key={err}
                                data-testid="EditableProfileCard.Error"
                            />
                        ))}
                </HStack>
            </VStack>
        </DynamicModuleLoader>
    );
});
