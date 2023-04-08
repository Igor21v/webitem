import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { CodeEditor } from '@/entities/CodeEditor';
import { Input } from '@/shared/ui/Input';
import { SizePreview } from '../SizePreview/SizePreview';
import { ItemEditCardType } from '../../../model/types/ItemEditCard';
import { ItemTypeSelector } from '../ItemTypeSelector/ItemTypeSelector';
import { TabItem } from '@/shared/ui/Tabs';
import { languageType } from '@/shared/types/codes';

interface ItemEditProps {
    className?: string;
    item: ItemEditCardType;
    handleUpdateItem: (key: keyof ItemEditCardType) => (value: any) => void;
    langTabs: TabItem<languageType>[];
}

export const ItemEditCard = memo((props: ItemEditProps) => {
    const { className, item, handleUpdateItem, langTabs } = props;
    const { t } = useTranslation('adminPanel');
    let width;
    let height;
    if (item.useSize) {
        width = item.width;
        height = item.height;
    }
    return (
        <VStack gap="8" className={classNames('', {}, [className])} max>
            <CodeEditor
                codes={item?.codes}
                setCodes={handleUpdateItem('codes')}
                previewWidth={width}
                previewHeight={height}
                langTabs={langTabs}
            />
            <Input
                value={item?.title}
                placeholder={t('Title')}
                onChange={handleUpdateItem('title')}
            />
            <Input
                value={item?.description}
                placeholder={t('Description')}
                onChange={handleUpdateItem('description')}
            />
            <ItemTypeSelector
                type={item?.type}
                setType={handleUpdateItem('type')}
            />
            <Input
                value={item?.img}
                placeholder={t('Image')}
                onChange={handleUpdateItem('img')}
            />
            <Input
                value={item?.imgAnim}
                placeholder={t('Image with animation')}
                onChange={handleUpdateItem('imgAnim')}
            />
            <SizePreview
                width={item?.width}
                height={item?.height}
                setWidth={handleUpdateItem('width')}
                setHeight={handleUpdateItem('height')}
                useSize={item?.useSize}
                setFullWidth={handleUpdateItem('useSize')}
            />
        </VStack>
    );
});
