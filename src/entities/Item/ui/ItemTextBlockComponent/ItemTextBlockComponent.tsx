import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ItemTextBlock } from '../../model/types/item';
import cls from './ItemTextBlockComponent.module.scss';

interface ItemTextBlockComponentProps {
    className?: string;
    block: ItemTextBlock;
}

export const ItemTextBlockComponent = memo(
    (props: ItemTextBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div className={classNames('', {}, [className])}>
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
