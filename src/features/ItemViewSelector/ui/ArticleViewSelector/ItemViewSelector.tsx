import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ItemViewSelector.module.scss';
import { ItemView } from '@/entities/Item';

interface ItemViewSelectorProps {
    className?: string;
    view: ItemView;
    onViewClick?: (view: ItemView) => void;
}

const viewTypes = [
    {
        view: ItemView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ItemView.BIG,
        icon: ListIcon,
    },
];

export const ItemViewSelector = memo((props: ItemViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ItemView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
