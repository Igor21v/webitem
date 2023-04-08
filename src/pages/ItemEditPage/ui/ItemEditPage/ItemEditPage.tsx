import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ItemEdit } from '@/features/ItemEdit';
import { Page } from '@/widgets/Page';

interface ItemEditPageProps {
    className?: string;
}

const ItemEditPage = memo((props: ItemEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('itemEdit');
    const { id } = useParams<{ id: string }>();
    return (
        <Page data-testid="AdminPanelPage">{id && <ItemEdit id={id} />}</Page>
    );
});

export default ItemEditPage;
