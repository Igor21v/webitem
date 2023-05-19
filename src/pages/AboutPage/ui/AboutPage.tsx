import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './AboutPage.module.scss';
import { TextSpan } from '@/shared/ui/TextSpan';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    useEffect(() => {
        document.title = t('Title about');
    }, [t]);
    return (
        <Page data-testid="AboutPage">
            {/*             <HStack justify="center">
            </HStack> */}
            <br />
            <span>
                <TextSpan text={t('Support')} />
                <AppLink to={link} target="_blank">
                    <TextSpan text={t('Github')} italic />
                </AppLink>
            </span>

            <br />
            <ul>
                <AppImage
                    className={cls.img}
                    src={`${__STATIC_URL__}/app_icons/appIcon_50_99.png`}
                    height={99}
                    width={50}
                    fallback=<Skeleton height={99} width={50} />
                />
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
