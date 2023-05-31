import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');
    useEffect(() => {
        document.head.title = t('You do not have access to this page');
    }, [t]);
    return (
        <Page data-testid="ForbiddenPage">
            {t('You do not have access to this page')}
        </Page>
    );
};

export default ForbiddenPage;
