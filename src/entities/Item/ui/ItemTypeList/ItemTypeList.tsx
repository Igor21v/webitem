import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemTypeList.module.scss';
import { itemList } from '../../model/consts/ItemList';
import { ItemTypeCard } from '../ItemTypeCard/ItemTypeCard';

interface ItemTypeListProps {
    className?: string;
}

export const ItemTypeList = memo((props: ItemTypeListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ItemTypeList, {}, [className])}>
            {itemList.map((itemType) => (
                <ItemTypeCard key={itemType.type} itemType={itemType} />
            ))}
        </div>
    );
});
