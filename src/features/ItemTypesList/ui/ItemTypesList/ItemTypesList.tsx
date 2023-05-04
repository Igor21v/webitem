import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemTypesList.module.scss';

interface ItemTypesListProps {
    className?: string;
}

export const ItemTypesList = memo((props: ItemTypesListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={classNames(cls.ItemTypesList, {}, [className])} />;
});
