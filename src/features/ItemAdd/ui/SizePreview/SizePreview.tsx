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
    width: string;
    height: string;
    setWidth: (value: string) => void;
    setHeight: (value: string) => void;
    fullWidth: boolean;
    setFullWidth: (value: boolean) => void;
}

export const SizePreview = memo((props: SizePreviewProps) => {
    const {
        className,
        height,
        width,
        setHeight,
        setWidth,
        fullWidth,
        setFullWidth,
    } = props;
    const { t } = useTranslation();
    return (
        <Card>
            <VStack className={cls.SizePreview}>
                <Text
                    text="Настройка окна предварительного просмотра, (450*256 для создания скрина)"
                    className={cls.text}
                    align={TextAlign.CENTER}
                />
                <Checkbox
                    checked={Boolean(fullWidth)}
                    onChange={setFullWidth}
                    label="Во всю ширину"
                />
                <HStack gap="8">
                    <Input
                        value={width}
                        placeholder="Ширина"
                        onChange={setWidth}
                        type="number"
                        readOnly={fullWidth}
                    />
                    <Input
                        value={height}
                        placeholder={t('Height')}
                        onChange={setHeight}
                        type="number"
                        readOnly={fullWidth}
                    />
                </HStack>
            </VStack>
        </Card>
    );
});
