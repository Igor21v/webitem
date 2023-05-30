import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { TextSpan } from '@/shared/ui/TextSpan';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const link = 'https://github.com/Igor21v/webitem';
    useEffect(() => {
        document.title = t('Title about');
    }, [t]);
    const { isScreenXl } = useResizeWindow();
    return (
        <Page data-testid="AboutPage">
            {isScreenXl && <br />}
            <span>
                <TextSpan text={t('Support')} />
                <AppLink to={link} target="_blank">
                    <TextSpan text={t('Github')} italic underline />
                </AppLink>
                <TextSpan text={t('Smile')} />
            </span>

            <br />
            <ul>
                {/* <AppImage
                    className={cls.img}
                    src="favicon.svg"
                    height={100}
                    width={100}
                    fallback=<Skeleton height={99} width={50} />
                /> */}
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
