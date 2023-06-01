import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { ItemLikeList } from '@/features/ItemLikeList';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { AppHead } from '@/shared/ui/AppHead';

export default function ItemsLikePage() {
    const { t } = useTranslation('itemsLike');
    useEffect(() => {
        ym(93784203, 'hit', '#');
    }, []);
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
                title={t('Избранные компоненты webitem')}
                description="Избранное выбранные компоненты для сайта"
            />
        </>
    );
}
