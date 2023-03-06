import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ItemLikeList } from '@/features/ItemLikeList';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { LOCAL_STORAGE_ITEMS_LIKE } from '@/shared/const/localstorage';

export default function ItemsLikePage() {
    const { t } = useTranslation('itemsLike');
    const likesItem = localStorage.getItem(LOCAL_STORAGE_ITEMS_LIKE);
    console.log(` likesItem ${likesItem}`);
    if (!likesItem) {
        return <Text text={t('Not favourite elements')} />;
    }

    return (
        <Page data-testid="MainPage">
            <VStack gap="32" align="center" max>
                <Text
                    size={TextSize.L}
                    title={t('Favorite elements')}
                    align={TextAlign.CENTER}
                />
                <ItemLikeList likesItem={likesItem} />
            </VStack>
        </Page>
    );
}
