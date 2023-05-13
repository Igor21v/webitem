import { ItemListItemSkeleton } from '../ItemListItem/ItemListItem/ItemListItemSkeleton';
import cls from './ItemListInfinite.module.scss';
import { ItemView } from '../../model/consts/ItemConst';

export const ItemListSkeletons = (view: ItemView) =>
    new Array(view === ItemView.SMALL ? 20 : 4)
        .fill(0)
        .map((item, index) => (
            <ItemListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
