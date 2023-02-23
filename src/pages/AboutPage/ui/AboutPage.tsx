import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CodeEditor } from '@/entities/CodeEditor';

export default function AboutPage() {
    const { t } = useTranslation('about');
    const blocks = {
        HTML: '<div class="test">TEXT</div>',
        CSS: '.test {font-size: 30px}',
        JS: 'console.log("test")',
    };
    return (
        <Page data-testid="AboutPage">
            {t('Page about site')}
            <CodeEditor blocks={blocks} />
        </Page>
    );
}
