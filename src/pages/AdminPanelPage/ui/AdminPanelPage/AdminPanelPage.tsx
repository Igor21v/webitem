import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Page } from '@/widgets/Page';
import { CodeEditor } from '@/entities/CodeEditor';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    const [codes, setCodes] = useState<CodesContentType>({
        html: '',
        css: '',
        js: '',
    });

    const onCopy = useCallback(
        (lang: languageType) => () => {
            const codeStringify = JSON.stringify(codes[lang]);
            navigator.clipboard.writeText(codeStringify);
        },
        [codes],
    );

    return (
        <Page data-testid="AdminPanelPage">
            <Text title={t('Admin panel')} align={TextAlign.CENTER} />

            <Text text="Конвертер кода в JSON" />

            <CodeEditor
                codes={codes}
                setCodes={setCodes}
                previewHeight={256}
                previewWidth={450}
            />

            <Text title="Код HTML" text={JSON.stringify(codes.html)} />
            <Button onClick={onCopy('html')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <hr />
            <Text title="Код CSS" text={JSON.stringify(codes.css)} />
            <Button onClick={onCopy('css')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <hr />
            <Text title="Код JS" text={JSON.stringify(codes.js)} />
            <Button onClick={onCopy('js')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
        </Page>
    );
};

export default AdminPanelPage;
