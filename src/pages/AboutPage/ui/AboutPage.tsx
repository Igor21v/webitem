import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export default function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            {t('Page about site')}
            <img
                src="https://habrastorage.org/getpro/habr/upload_files/45f/3b9/4d8/45f3b94d8807cf11e44720d8897134b7.gif"
                alt=""
            />
        </Page>
    );
}
