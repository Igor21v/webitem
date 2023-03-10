/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function MainPage() {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            {t('Page main')}
            <hr />
            Глобальный поиск
            <hr />
            Новинки
            <hr />
            Рекомендации на основе избранных
            <hr />
            Избранные статьи
        </Page>
    );
}
