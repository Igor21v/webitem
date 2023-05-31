import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ItemEdit } from '@/features/ItemEdit';
import { Page } from '@/widgets/Page';
import { ItemEditPageHeader } from '../ItemEditPageHeader/ItemEditPageHeader';
import { AppHead } from '@/shared/ui/AppHead';

interface ItemEditPageProps {
    className?: string;
}

const ItemEditPage = memo((props: ItemEditPageProps) => {
    const { t } = useTranslation('itemEdit');
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Page data-testid="AdminPanelPage">
                {' '}
                <ItemEditPageHeader />
                {id && <ItemEdit id={id} />}
            </Page>
            <AppHead
                title={t('Редактирование компонента webitem')}
                description="Редактировать компонент webitem"
            />
        </>
    );
});

export default ItemEditPage;
