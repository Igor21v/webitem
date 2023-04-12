import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { languageType } from '@/shared/types/codes';
import { Button } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    itemAddReducer,
    useItemAddActions,
} from '../../model/slice/ItemAddSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useItemAddSelector } from '../../model/selectors/getItemAddForm/getItemAddForm';

import { itemAdd } from '../../model/services/addItem/addItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initialState } from '../../model/consts/itemAddConsts';
import { ItemEditCard, ItemEditType } from '@/entities/Item';
import { ValidateAddItemError } from '../../model/types/itemAddSchema';

interface ItemAddProps {
    className?: string;
}

export const ItemAdd = memo((props: ItemAddProps) => {
    const { className } = props;
    const { t } = useTranslation('adminPanel');
    const langTabs = Object.keys(initialState.item.codes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));
    const itemAddState = useItemAddSelector();
    const { validateEnable, item } = itemAddState;
    const { updateItem, setError } = useItemAddActions();
    const dispatch = useAppDispatch();
    const handleAddItem = useCallback(() => {
        dispatch(itemAdd());
    }, [dispatch]);

    const handleUpdateItem = useCallback(
        (key: keyof ItemEditType) => (value: any) => {
            updateItem({ [key]: value });
        },
        [updateItem],
    );
    const reducers: ReducersList = {
        itemAdd: itemAddReducer,
    };
    const validateErrorTranslates: Record<ValidateAddItemError, 'string'> = {
        'server error': t('Server error'),
        'incorrect size': t('Incorrect size'),
        'incorrect title': t('Enter the title'),
        'incorrect type': t('Type not selected'),
        'already exists': t('A component with this header already exists'),
    };

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <VStack gap="8">
                <Text title={t('Add new item')} />
                <ItemEditCard
                    item={item}
                    langTabs={langTabs}
                    handleUpdateItem={handleUpdateItem}
                    setError={setError}
                    validateEnable={validateEnable}
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
