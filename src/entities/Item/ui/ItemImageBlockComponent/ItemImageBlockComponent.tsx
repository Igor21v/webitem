import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ItemImageBlock } from '../../model/types/item';
import cls from './ItemImageBlockComponent.module.scss';

interface ItemImageBlockComponentProps {
    className?: string;
    block: ItemImageBlock;
}

export const ItemImageBlockComponent = memo(
    (props: ItemImageBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div className={classNames('', {}, [className])}>
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    },
);
