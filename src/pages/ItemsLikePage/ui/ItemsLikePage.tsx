import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ItemLikeList } from '@/features/ItemLikeList';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { AppHead } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';

export default function ItemsLikePage() {
    const { t } = useTranslation('itemsLike');
    useYandexMetrikaHit();
    const breadcrumb = [
        {
            name: t('Favorite elements'),
            path: `/favourites`,
        },
    ];
    return (
        <>
            <Page data-testid="MainPage">
                <VStack gap="32" align="center" max>
                    <Text
                        size={TextSize.L}
                        title={t('Favorite elements')}
                        align={TextAlign.CENTER}
                    />
                    <ItemLikeList />
                </VStack>
            </Page>
            <AppHead
                title={t('Favorite title')}
                description={t('Favorite description')}
                breadcrumbList={breadcrumb}
            />
        </>
    );
}
