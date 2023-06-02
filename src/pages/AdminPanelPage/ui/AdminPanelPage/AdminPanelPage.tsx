import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ItemAdd } from '@/features/ItemAdd';
import { AppHead } from '@/shared/lib/components/AppHead';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');
    return (
        <>
            <Page data-testid="AdminPanelPage">
                <Text title={t('Title admin')} align={TextAlign.CENTER} />
                <ItemAdd />
            </Page>
            <AppHead
                title={t('Панель администратора webitem')}
                description="Добавить компонент webitem"
            />
        </>
    );
};

export default AdminPanelPage;
