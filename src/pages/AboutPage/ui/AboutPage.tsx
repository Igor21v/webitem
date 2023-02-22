import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CodeEditor } from '@/entities/CodeEditor';

export default function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            {t('Page about site')}
            <CodeEditor />
        </Page>
    );
}
