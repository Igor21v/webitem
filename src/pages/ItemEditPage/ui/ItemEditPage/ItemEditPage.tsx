import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemEditPage.module.scss';
import { ItemEdit } from '@/features/ItemEdit';

interface ItemEditPageProps {
    className?: string;
}

const ItemEditPage = memo((props: ItemEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('itemEdit');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <div className={classNames(cls.ItemEditPage, {}, [className])}>
            {isEdit ? t('Edit item with ID') + id : t('Creat new item')}
            <ItemEdit id={id} />
        </div>
    );
});

export default ItemEditPage;
