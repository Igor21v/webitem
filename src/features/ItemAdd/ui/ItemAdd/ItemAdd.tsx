import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemAdd.module.scss';
import { CodeEditor } from '@/entities/CodeEditor';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { ItemTypeSelector } from '../ItemTypeSelector/ItemTypeSelector';
import { VStack } from '@/shared/ui/Stack';

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
    const [codes, setCodes] = useState<CodesContentType>(initCodes);
    const langTabs = Object.keys(initCodes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [imgAnim, setImgAnim] = useState('');

    return (
        <VStack gap="8" className={classNames(cls.ItemAdd, {}, [className])}>
            <Text title={t('Add new item')} />
            <CodeEditor
                codes={codes}
                setCodes={setCodes}
                previewHeight={256}
                previewWidth={450}
                langTabs={langTabs}
            />
            <Input value={title} placeholder={t('Title')} onChange={setTitle} />
            <Input
                value={description}
                placeholder={t('Description')}
                onChange={setDescription}
            />
            <Input value={img} placeholder={t('Image')} onChange={setImg} />
            <Input
                value={imgAnim}
                placeholder={t('Image with animation')}
                onChange={setImgAnim}
            />
            <ItemTypeSelector />
            <Button className={cls.addButton}>{t('Add item')}</Button>
        </VStack>
    );
});
