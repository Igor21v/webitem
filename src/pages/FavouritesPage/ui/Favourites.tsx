import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function FavouritesPage() {
    const { t } = useTranslation('favourites');
    return <Page data-testid="MainPage">{t('Page favourites')}</Page>;
}
