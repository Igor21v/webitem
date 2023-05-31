import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { AppHead } from '@/shared/ui/AppHead';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');
    return (
        <>
            <Page data-testid="ForbiddenPage">
                {t('You do not have access to this page')}
            </Page>
            <AppHead title={t('Отказано в доступе к странице на webitem.ru')} />
        </>
    );
};

export default ForbiddenPage;
