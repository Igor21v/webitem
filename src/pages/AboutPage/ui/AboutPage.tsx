import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import AppIcon from '@/shared/assets/icons/app-icon.svg';
import { Icon } from '@/shared/ui/Icon';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    useEffect(() => {
        document.title = t('Title about');
    }, [t]);
    return (
        <Page data-testid="AboutPage">
            <HStack justify="center">
                <Icon Svg={AppIcon} height={100} width={100} />
            </HStack>
            <br />
            <Text text={t('Github')} />
            <AppLink to={link} target="_blank">
                <Text title={link} />
            </AppLink>
            <br />
            <ul>
                <li>
                    <Text text={t('Introduction')} />
                </li>
                <li>
                    <Text text={t('Frontend')} />
                </li>
                <li>
                    <Text text={t('Backend')} />
                </li>
                <li>
                    <Text text={t('Developer')} />
                </li>
            </ul>
        </Page>
    );
}
