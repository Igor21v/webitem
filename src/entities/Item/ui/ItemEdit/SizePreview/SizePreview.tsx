import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './SizePreview.module.scss';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Card } from '@/shared/ui/Card';

interface SizePreviewProps {
    className?: string;
    width?: number;
    height?: number;
    setWidth: (value: number) => void;
    setHeight: (value: number) => void;
    useSize?: boolean;
    setFullWidth: (value: boolean) => void;
}

export const SizePreview = memo((props: SizePreviewProps) => {
    const {
        className,
        height,
        width,
        setHeight,
        setWidth,
        useSize,
        setFullWidth,
    } = props;
    const { t } = useTranslation();
    return (
        <Card max>
            <VStack>
                <Text
                    text="Настройка окна предварительного просмотра, (450*256 для создания скрина)"
                    className={cls.text}
                    align={TextAlign.CENTER}
                />
                <Checkbox
                    checked={Boolean(useSize)}
                    onChange={setFullWidth}
                    label="Задать статический размер окна для элемента:"
                />
                <HStack gap="8">
                    <Input
                        value={width}
                        placeholder="Ширина"
                        onChange={setWidth}
                        type="number"
                        readOnly={!useSize}
                    />
                    <Input
                        value={height}
                        placeholder={t('Height')}
                        onChange={setHeight}
                        type="number"
                        readOnly={!useSize}
                    />
                </HStack>
            </VStack>
        </Card>
    );
});
