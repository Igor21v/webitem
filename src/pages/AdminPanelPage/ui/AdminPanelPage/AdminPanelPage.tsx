import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ItemAdd } from '@/features/ItemAdd';

const AdminPanelPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="AdminPanelPage">
            <Text title={t('Admin panel')} align={TextAlign.CENTER} />
            <ItemAdd />
        </Page>
    );
};

export default AdminPanelPage;
