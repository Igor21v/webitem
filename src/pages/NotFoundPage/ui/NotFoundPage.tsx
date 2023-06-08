import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';
import { AppHead } from '@/shared/lib/components/AppHead';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <>
            <Page
                className={classNames(cls.NotFoundPage, {}, [className])}
                data-testid="NotFoundPage"
            >
                {t('Page not found')}
            </Page>
            <AppHead title={t('Page not found')} />
        </>
    );
};
