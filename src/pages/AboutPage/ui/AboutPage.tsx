import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { TextSpan } from '@/shared/ui/TextSpan';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import cls from './AboutPage.module.scss';
import { AppIcon } from '@/shared/ui/AppIcon';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    useEffect(() => {
        document.title = t('Title about');
    }, [t]);
    const { isScreenXl } = useResizeWindow();
    return (
        <Page data-testid="AboutPage" className={cls.AboutPage}>
            {isScreenXl && <br />}
            <AppIcon className={cls.img} />
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
    );
}
