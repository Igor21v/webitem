import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function MainPage() {
    const { t } = useTranslation('main');
    return <Page data-testid="MainPage">{t('Page main')}</Page>;
}
