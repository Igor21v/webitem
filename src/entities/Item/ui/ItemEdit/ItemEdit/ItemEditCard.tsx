import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { CodeEditor } from '@/entities/CodeEditor';
import { Input } from '@/shared/ui/Input';
import { SizePreview } from '../SizePreview/SizePreview';
import {
    EditItemError,
    ItemEditCardType,
} from '../../../model/types/ItemEditCard';
import { ItemTypeSelector } from '../ItemTypeSelector/ItemTypeSelector';
import { TabItem } from '@/shared/ui/Tabs';
import { languageType } from '@/shared/types/codes';
import { useNonInitialEffect } from '@/shared/lib/hooks/useNonInitialEffect/useNonInitialEffect';

interface ItemEditProps {
    className?: string;
    item: ItemEditCardType;
    handleUpdateItem: (key: keyof ItemEditCardType) => (value: any) => void;
    langTabs: TabItem<languageType>[];
    setError?: (errors: EditItemError[]) => void;
    validate?: boolean;
}

export const ItemEditCard = memo((props: ItemEditProps) => {
    const {
        className,
        item,
        handleUpdateItem,
        langTabs,
        setError,
        validate = true,
    } = props;
    const { t } = useTranslation('adminPanel');
    let width;
    let height;
    if (item.useSize) {
        width = item.width;
        height = item.height;
    }

    const errors: EditItemError[] = [];
    const titleError = item?.title === '';
    if (titleError) {
        errors.push('incorrect title');
    }
    const typeError = !item?.type || item.type === 'not selected';
    if (typeError) {
        errors.push('incorrect type');
    }
    const sizeError =
        item.useSize &&
        (!width ||
            !height ||
            width < 10 ||
            width > 4000 ||
            height < 10 ||
            height > 4000);
    if (sizeError) {
        errors.push('incorrect size');
    }
    useNonInitialEffect(() => {
        setError?.(errors);
    }, [titleError, typeError, sizeError]);

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
                validateError={titleError && validate}
            />
            <Input
                value={item?.description}
                placeholder={t('Description')}
                onChange={handleUpdateItem('description')}
            />
            <ItemTypeSelector
                type={item?.type}
                setType={handleUpdateItem('type')}
                validateError={typeError && validate}
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
                validateError={sizeError && validate}
            />
        </VStack>
    );
});
