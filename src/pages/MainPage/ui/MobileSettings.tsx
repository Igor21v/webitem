/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Card } from '@/shared/ui/Card';
import cls from './MainPage.module.scss';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ButtonTheme } from '@/shared/ui/Button';

export default function MobileSettings() {
    const { t } = useTranslation('main');
    useEffect(() => {
        document.title = t('Title main');
    }, [t]);
    return (
        <HStack max justify="center">
            <Card className={cls.settings} shadow>
                <Text
                    title={t('Settings')}
                    align={TextAlign.CENTER}
                    className={cls.textSettings}
                />
                <HStack justify="around">
                    <ThemeSwitcher />
                    <LangSwitcher theme={ButtonTheme.CLEAR} />
                </HStack>
            </Card>
        </HStack>
    );
}
