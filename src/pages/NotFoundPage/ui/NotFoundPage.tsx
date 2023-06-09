import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { AppHead } from '@/shared/lib/components/AppHead';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import cls from './NotFoundPage.module.scss';
import { HStack } from '@/shared/ui/Stack';

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

    const content = !loadingLang ? (
        <HStack align="center">
            <Loader className={cls.loader} />
        </HStack>
    ) : (
        <Text title={t('Page not found')} align={TextAlign.CENTER} />
    );

    return (
        <>
            <Page data-testid="NotFoundPage">{content}</Page>
            <AppHead title={t('Page not found')} />
        </>
    );
};
