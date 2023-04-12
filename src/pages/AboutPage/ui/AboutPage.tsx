import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import AppIcon from '@/shared/assets/icons/app-icon.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
// eslint-disable-next-line igor21v/public-api-imports
// eslint-disable-next-line igor21v/public-api-imports

export default function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            <HStack>
                <div>
                    <Text text={t('Introduction')} />
                    <Text text={t('A call')} />
                    <Text text={t('Developer')} />
                </div>
                <Icon Svg={AppIcon} height={400} width={400} />
            </HStack>
        </Page>
    );
}
