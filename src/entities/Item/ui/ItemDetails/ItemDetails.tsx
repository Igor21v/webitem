import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ItemDetails.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import ItemIcon from '@/shared/assets/icons/app-icon.svg';
import { ItemLike } from '../ItemLike/ItemLike';
import TypeIcon from '@/shared/assets/icons/type.svg';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Item } from '../../model/types/item';
import { CodeEditor } from '@/entities/CodeEditor';
import { ItemTypeUI } from '../ItemTypeUI/ItemTypeUI';

interface ItemDetailsProps {
    item?: Item;
}

export const ItemDetails = memo((props: ItemDetailsProps) => {
    const { item } = props;
    const { t } = useTranslation();
    const [codes, setCodes] = useState<CodesContentType>({
        html: item?.codes.html,
        css: item?.codes.css,
        js: item?.codes.js,
    });
    const langTabs = useMemo(() => {
        if (item) {
            return Object.keys(item?.codes).map((lang) => ({
                value: lang as languageType, // TODO
                content: lang.toUpperCase(),
            }));
        }
        return [];
    }, [item]);
    let width;
    let height;
    if (item?.useSize) {
        width = item.width;
        height = item.height;
    }
    return (
        <>
            <HStack justify="center" max>
                <AppImage
                    height={200}
                    width={200}
                    round
                    src={`${__STATIC_URL__}/items/${item?.title}.png`}
                    className={cls.itemImage}
                    fallback={
                        <Skeleton
                            className={cls.itemImage}
                            width={200}
                            height={200}
                            border="50%"
                        />
                    }
                    errorFallback={
                        <Icon
                            Svg={ItemIcon}
                            width={200}
                            height={200}
                            opacity={0.7}
                        />
                    }
                />
            </HStack>
            <VStack gap="4" data-testid="ItemDetails.Info" max>
                <Text title={item?.title} size={TextSize.L} />
                <Text
                    text={item?.description}
                    size={TextSize.M}
                    className={cls.description}
                />
                <HStack max justify="between">
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(item?.views)} />
                    </HStack>
                    <ItemLike itemId={item?.id || ''} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={CalendarIcon} />
                    <Text text={item?.createdAt} />
                </HStack>
                <HStack gap="8">
                    <Icon Svg={TypeIcon} />
                    <ItemTypeUI type={item?.type} />
                </HStack>
            </VStack>
            <CodeEditor
                codes={codes}
                setCodes={setCodes}
                langTabs={langTabs}
                previewWidth={width}
                previewHeight={height}
            />
        </>
    );
});
