import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CodeEditor } from '@/entities/CodeEditor';
import { languageType } from '@/shared/types/codes';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ItemTypeSelector } from '../ItemTypeSelector/ItemTypeSelector';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SizePreview } from '../SizePreview/SizePreview';
import {
    itemAddReducer,
    useItemAddActions,
} from '../../model/slice/ItemAddSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useItemAddSelector } from '../../model/selectors/getItemAddForm/getItemAddForm';
import { ItemAddType } from '../../model/types/itemAddSchema';
import { itemAdd } from '../../model/services/addItem/addItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    initialState,
    ValidateAddItemError,
} from '../../model/consts/itemAddConsts';

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
    const itemForm = itemAddState.item;
    const { updateItem } = useItemAddActions();
    const dispatch = useAppDispatch();
    const handleAddItem = useCallback(() => {
        dispatch(itemAdd());
    }, [dispatch]);

    const handleUpdateItem = useCallback(
        (key: keyof ItemAddType) => (value: any) => {
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
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text title={t('Add new item')} />
                <CodeEditor
                    codes={itemForm?.codes}
                    setCodes={handleUpdateItem('codes')}
                    previewWidth={itemForm?.width}
                    previewHeight={itemForm?.height}
                    langTabs={langTabs}
                />
                <Input
                    value={itemForm?.title}
                    placeholder={t('Title')}
                    onChange={handleUpdateItem('title')}
                />
                <Input
                    value={itemForm?.description}
                    placeholder={t('Description')}
                    onChange={handleUpdateItem('description')}
                />
                <ItemTypeSelector
                    type={itemForm?.type}
                    setType={handleUpdateItem('type')}
                />
                <Input
                    value={itemForm?.img}
                    placeholder={t('Image')}
                    onChange={handleUpdateItem('img')}
                />
                <Input
                    value={itemForm?.imgAnim}
                    placeholder={t('Image with animation')}
                    onChange={handleUpdateItem('imgAnim')}
                />
                <SizePreview
                    width={itemForm?.width}
                    height={itemForm?.height}
                    setWidth={handleUpdateItem('width')}
                    setHeight={handleUpdateItem('height')}
                    fullWidth={itemForm?.fullWidth}
                    setFullWidth={handleUpdateItem('fullWidth')}
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
