import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ItemAdd } from '@/features/ItemAdd';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');
    useEffect(() => {
        document.head.title = t('Title admin');
    }, [t]);
    return (
        <Page data-testid="AdminPanelPage">
            <Text title={t('Title admin')} align={TextAlign.CENTER} />
            <ItemAdd />
        </Page>
    );
};

export default AdminPanelPage;
