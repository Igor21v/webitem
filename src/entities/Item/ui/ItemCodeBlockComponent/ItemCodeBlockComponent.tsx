import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { ItemCodeBlock } from '../../model/types/item';
import cls from './ItemCodeBlockComponent.module.scss';

interface ItemCodeBlockComponentProps {
    className?: string;
    block: ItemCodeBlock;
}

export const ItemCodeBlockComponent = memo(
    (props: ItemCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div
                className={classNames(cls.ItemCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    },
);
