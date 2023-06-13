import { useTranslation } from 'react-i18next';
import { AppHead } from '@/shared/lib/components/AppHead';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import cls from './NotFoundPage.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t, i18n } = useTranslation();
    const url = new URL(String(document.location));
    const langPath = url.pathname.slice(1, 3);
    let loadingLang = true;
    if (
        i18n.language === langPath ||
        (i18n.language === 'ru' && langPath !== 'en')
    ) {
        loadingLang = false;
    }

    if (loadingLang)
        return (
            <Page data-testid="NotFoundPage">
                <HStack align="center">
                    <Loader className={cls.loader} />
                </HStack>
                <AppHead title={t('Loading')} />
            </Page>
        );
    return (
        <Page data-testid="NotFoundPage">
            <Text title={t('Page not found')} align={TextAlign.CENTER} />
            <AppHead title={t('Page not found')} />
        </Page>
    );
};
