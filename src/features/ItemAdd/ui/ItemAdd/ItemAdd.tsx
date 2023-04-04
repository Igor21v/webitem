import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CodeEditor } from '@/entities/CodeEditor';
import { languageType } from '@/shared/types/codes';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { ItemTypeSelector } from '../ItemTypeSelector/ItemTypeSelector';
import { VStack } from '@/shared/ui/Stack';
import { SizePreview } from '../SizePreview/SizePreview';
import { useItemAdd } from '../../api/ItemAdd';
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

interface ItemAddProps {
    className?: string;
}

export const ItemAdd = memo((props: ItemAddProps) => {
    const { className } = props;
    const { t } = useTranslation('adminPanel');
    const initCodes = {
        html: '',
        css: '',
        js: '',
    };
    const langTabs = Object.keys(initCodes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));
    const [fullWidth, setFullWidth] = useState(true);
    const itemForm = useItemAddSelector();
    const { updateItem } = useItemAddActions();
    const handleUpdateItem = useCallback(
        (key: keyof ItemAddType) => (value: any) => {
            updateItem({ [key]: value });
        },
        [updateItem],
    );

    const [rateItemMutation] = useItemAdd();
    const reducers: ReducersList = {
        itemAdd: itemAddReducer,
    };
    const handleAddItem = () =>
        rateItemMutation({
            codes: itemForm?.codes ?? initCodes,
            title: itemForm?.title ?? '',
            description: itemForm?.description,
            type: itemForm?.type ?? 'not selected',
            img: itemForm?.img,
            imgAnim: itemForm?.imgAnim,
        });

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
                    fullWidth={fullWidth}
                    setFullWidth={setFullWidth}
                />
                <Button onClick={handleAddItem}>{t('Add item')}</Button>
            </VStack>
        </DynamicModuleLoader>
    );
});
