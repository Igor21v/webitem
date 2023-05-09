/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { ItemTypeList } from '@/entities/Item';

export default function MainPage() {
    const { t } = useTranslation('main');
    useEffect(() => {
        document.title = t('Title main');
    }, [t]);
    return (
        <Page data-testid="MainPage">
            <ItemTypeList />
        </Page>
    );
}
