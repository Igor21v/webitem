import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { TextSpan } from '@/shared/ui/TextSpan';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { AppHead } from '@/shared/lib/components/AppHead';
import { useYandexMetrikaHit } from '@/shared/lib/hooks/useYandexMetrika/useYandexMetrika';
import { AppIcon } from '@/shared/ui/AppIcon';
import cls from './AboutPage.module.scss';
import { breadcrmbElementType } from '@/shared/lib/components/AppHead/BreadcrumbList';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    const { isScreenXl } = useResizeWindow();
    useYandexMetrikaHit();
    const breadcrumb: breadcrmbElementType[] = [
        {
            name: 'Huemoe',
            path: 'sdf',
        },
    ];
    return (
        <>
            <Page data-testid="AboutPage" className={cls.AboutPage}>
                {isScreenXl && <br />}
                <AppIcon className={cls.img} />
                <br />
                <ul>
                    <li>
                        <Text text={t('Introduction')} />
                    </li>
                    <li>
                        <Text text={t('Frontend')} />
                    </li>
                    <li>
                        <span>
                            <TextSpan text={t('Link')} />
                            <AppLink to={link} target="_blank">
                                <TextSpan text={t('Github')} italic underline />
                            </AppLink>
                        </span>
                    </li>
                    <li>
                        <Text text={t('Developer')} />
                    </li>
                </ul>
            </Page>
            <AppHead
                title={t('About title')}
                description={t('About description')}
                keywords={t('About keywords')}
                breadcrumbList={breadcrumb}
            />
        </>
    );
}
