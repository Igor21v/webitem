import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { TextSpan } from '@/shared/ui/TextSpan';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { AppHead } from '@/shared/ui/AppHead';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    const { isScreenXl } = useResizeWindow();
    return (
        <>
            <Page data-testid="AboutPage">
                {isScreenXl && <br />}
                {/* <AppIcon className={cls.img} /> */}
                <span>
                    <TextSpan text={t('Support')} />
                    <AppLink to={link} target="_blank">
                        <TextSpan text={t('Github')} italic underline />
                    </AppLink>
                    <TextSpan text={t('Smile')} />
                </span>

                <br />
                <ul>
                    <li>
                        <Text text={t('Introduction')} />
                    </li>
                    <li>
                        <Text text={t('Frontend')} />
                    </li>
                    {/* <li>
                    <Text text={t('Backend')} />
                </li> */}
                    <li>
                        <Text text={t('Developer')} />
                    </li>
                </ul>
            </Page>
            <AppHead
                title={t(
                    'Информация о сайте Webitem. Разработка и поддержка галереи компонентов для сайта',
                )}
                description="Сайт на React. Бондаренко Игорь Владимирович. Приложение React"
            />
        </>
    );
}
