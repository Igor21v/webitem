import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ItemEdit } from '@/features/ItemEdit';
import { Page } from '@/widgets/Page';
import { ItemEditPageHeader } from '../ItemEditPageHeader/ItemEditPageHeader';

interface ItemEditPageProps {
    className?: string;
}

const ItemEditPage = memo((props: ItemEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    return (
        <Page data-testid="AdminPanelPage">
            {' '}
            <ItemEditPageHeader />
            {id && <ItemEdit id={id} />}
        </Page>
    );
});

export default ItemEditPage;
