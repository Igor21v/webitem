import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ItemTypes } from '../../model/consts/ItemList';
import { Text, TextProps } from '@/shared/ui/Text';

interface ItemTypeProps extends TextProps {
    className?: string;
    type?: ItemTypes;
}

export const ItemTypeUI = memo((props: ItemTypeProps) => {
    const { className, type, ...rest } = props;
    const { t } = useTranslation('itemType');
    if (type) {
        return (
            <Text
                text={t(type)}
                className={className}
                {...rest}
                HeaderTag="h2"
            />
        );
    }
    return null;
});
