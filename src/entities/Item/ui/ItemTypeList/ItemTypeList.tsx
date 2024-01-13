import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ItemTypeList.module.scss';
import { itemList } from '../../model/consts/ItemList';
import { ItemTypeCard } from '../ItemTypeCard/ItemTypeCard';

interface ItemTypeListProps {
    className?: string;
}

export const ItemTypeList = memo((props: ItemTypeListProps) => {
    const { className } = props;
    const { i18n } = useTranslation();
    if (i18n.language === 'ru') {
        itemList.sort((a, b) => a.positionRu - b.positionRu);
    } else {
        itemList.sort((a, b) => (a.type > b.type ? 1 : -1));
    }
    return (
        <div className={classNames(cls.ItemTypeList, {}, [className])}>
            {itemList.map((itemType) => (
                <ItemTypeCard key={itemType.type} itemType={itemType} />
            ))}
        </div>
    );
});
