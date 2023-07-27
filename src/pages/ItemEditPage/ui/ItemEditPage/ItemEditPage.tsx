import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ItemEdit } from '@/features/ItemEdit';
import { Page } from '@/widgets/Page';
import { ItemEditPageHeader } from '../ItemEditPageHeader/ItemEditPageHeader';
import { AppHead } from '@/shared/lib/components/AppHead';

const ItemEditPage = memo(() => {
    const { t } = useTranslation('itemEdit');
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Page data-testid="AdminPanelPage">
                {' '}
                <ItemEditPageHeader />
                {id && <ItemEdit id={id} />}
            </Page>
            <AppHead title={t('Edit title')} />
        </>
    );
});

export default ItemEditPage;
