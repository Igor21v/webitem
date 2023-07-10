import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import cls from './SizePreview.module.scss';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Card } from '@/shared/ui/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface SizePreviewProps {
    className?: string;
    width?: number;
    height?: number;
    setWidth: (value: number) => void;
    setHeight: (value: number) => void;
    useSize?: boolean;
    setFullWidth: (value: boolean) => void;
    validateError?: boolean;
}

export const SizePreview = memo((props: SizePreviewProps) => {
    const {
        className,
        height,
        width = 450,
        setHeight,
        setWidth,
        useSize,
        setFullWidth,
        validateError,
    } = props;
    const { t } = useTranslation('adminPanel');
    const calculateHandle = useCallback(() => {
        setHeight(width * 0.574);
    }, [setHeight, width]);
    return (
        <Card
            max
            className={classNames('', { [cls.validateError]: validateError })}
        >
            <VStack>
                <Text
                    text={t('size settings')}
                    className={cls.text}
                    align={TextAlign.CENTER}
                />
                <Checkbox
                    checked={Boolean(useSize)}
                    onChange={setFullWidth}
                    label="Задать статический размер окна для элемента:"
                    data-testid="SizePreview.Checkbox"
                />
                <HStack gap="8">
                    <Input
                        value={width}
                        placeholder={t('With')}
                        onChange={setWidth}
                        type="number"
                        readOnly={!useSize}
                        data-testid="SizePreview.Width"
                    />
                    <Input
                        value={height}
                        placeholder={t('Height')}
                        onChange={setHeight}
                        type="number"
                        readOnly={!useSize}
                        data-testid="SizePreview.Height"
                    />
                    <Button disabled={!useSize} onClick={calculateHandle}>
                        {t('Calculate height')}
                    </Button>
                </HStack>
            </VStack>
        </Card>
    );
});
