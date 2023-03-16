import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
// eslint-disable-next-line igor21v/public-api-imports
import { ItemListItemBigSkeleton } from '@/entities/Item/ui/ItemListItem/ItemListBigItem/ItemListItemBigSkeleton';
// eslint-disable-next-line igor21v/public-api-imports
import { ItemListItemSmallSkeleton } from '@/entities/Item/ui/ItemListItem/ItemListSmallItem/ItemListItemSmallSkeleton';

export default function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            {t('Page about site')}
            <ItemListItemBigSkeleton />
            <ItemListItemSmallSkeleton />
            8888
        </Page>
    );
}
