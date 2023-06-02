/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ItemTypeList } from '@/entities/Item';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import MobileSettings from './MobileSettings';
import { AppHead } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';

export default function MainPage() {
    const { t } = useTranslation('main');
    const { isScreenXl } = useResizeWindow();
    useYandexMetrikaHit();
    const description =
        'Все компоненты. All components. Элементы для сайта. Библиотека элементов для сайта.' +
        'Gallery of web components';
    return (
        <>
            <Page data-testid="MainPage">
                <ItemTypeList />
                {!isScreenXl && <MobileSettings />}
            </Page>
            <AppHead
                title={t(
                    'Главная страница webitem. Элементы и компоненты сайта разных типов',
                )}
                description={description}
            />
        </>
    );
}
