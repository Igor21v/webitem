/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ItemTypeList } from '@/entities/Item';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import MobileSettings from './MobileSettings';
import { AppHead, OpenGraphType } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';

export default function MainPage() {
    const { t } = useTranslation('main');
    const { isScreenXl } = useResizeWindow();
    useYandexMetrikaHit();
    const openGraph: OpenGraphType = {
        title: t('Main page title'),
        description: t('Main page description'),
        image: 'https://webitem.ru/favicon.svg',
        url: 'https://webitem.ru/',
    };
    return (
        <>
            <Page data-testid="MainPage">
                <ItemTypeList />
                {!isScreenXl && <MobileSettings />}
            </Page>
            <AppHead
                title={t('Main page title')}
                description={t('Main page description')}
                keywords={t('Main page keywords')}
                openGraph={openGraph}
            />
        </>
    );
}
