import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { languageType } from '@/shared/types/codes';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useItemEditActions } from '../../model/slice/ItemEditSlice';
import { useItemEditSelector } from '../../model/selectors/getItemEditForm/getItemEditForm';

import { itemEdit } from '../../model/services/editItem/editItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    initialState,
    ValidateAddItemError,
} from '../../model/consts/ItemEditConsts';
import { ItemEditCard, ItemEditType, Item } from '@/entities/Item';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ItemAddProps {
    className?: string;
    initItem: Item;
}

export const ItemEdit = memo((props: ItemAddProps) => {
    const { className, initItem } = props;
    const { t } = useTranslation('adminPanel');
    const langTabs = Object.keys(initialState.item.codes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));

    const itemEditState = useItemEditSelector();
    const itemForm = itemEditState.item;
    const { updateItem } = useItemEditActions();
    const dispatch = useAppDispatch();
    const handleEditItem = useCallback(() => {
        dispatch(itemEdit());
    }, [dispatch]);
    const setInit = useCallback(() => {
        updateItem(initItem);
    }, [initItem, updateItem]);
    useInitialEffect(() => {
        setInit();
    });

    const handleUpdateItem = useCallback(
        (key: keyof ItemEditType) => (value: any) => {
            updateItem({ [key]: value });
        },
        [updateItem],
    );
    const validateErrorTranslates = {
        [ValidateAddItemError.SERVER_ERROR]: t('Server error'),
        [ValidateAddItemError.INCORRECT_TITLE]: t('Enter the title'),
        [ValidateAddItemError.INCORRECT_TYPE]: t('Type not selected'),
        [ValidateAddItemError.INCORRECT_SIZE]: t('Incorrect size'),
        [ValidateAddItemError.SERVER_ERROR]: t('Server error'),
    };

    return (
        <VStack gap="8" max>
            <ItemEditCard
                item={itemForm}
                langTabs={langTabs}
                handleUpdateItem={handleUpdateItem}
            />
            <HStack gap="8" max>
                <Button onClick={setInit} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Cancel')}{' '}
                </Button>
                <Button onClick={handleEditItem}>{t('Save')}</Button>
                {itemEditState.fulfilled && (
                    <Text
                        theme={TextTheme.SUCCESS}
                        text={t('The component was successfully edit')}
                    />
                )}
                {itemEditState.error?.length &&
                    itemEditState.error?.map((err: ValidateAddItemError) => (
                        <Text
                            theme={TextTheme.ERROR}
                            text={`${validateErrorTranslates[err]};`}
                            key={err}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
            </HStack>
        </VStack>
    );
});
