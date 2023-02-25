import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CodeEditor } from '@/entities/CodeEditor';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const codes = {
        html: '<div class="test">TEXT</div>',
        css: '.test {font-size: 30px}',
        js: 'console.log("test")',
    };
    return (
        <Page data-testid="AboutPage">
            {t('Page about site')}
            <CodeEditor codes={codes} />
        </Page>
    );
}
