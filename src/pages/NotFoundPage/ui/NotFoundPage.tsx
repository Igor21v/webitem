import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';
import { AppHead } from '@/shared/ui/AppHead';

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
                {t('page-not-found')}
            </Page>
            <AppHead title={t('Страница не найдена :( webitem')} />
        </>
    );
};
