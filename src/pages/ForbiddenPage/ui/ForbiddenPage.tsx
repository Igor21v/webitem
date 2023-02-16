import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');
    return (
        <Page data-testid="ForbiddenPage">
            {t('You do not have access to this page')}
        </Page>
    );
};

export default ForbiddenPage;
