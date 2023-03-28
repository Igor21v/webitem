import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Page } from '@/widgets/Page';
import { CodeEditor } from '@/entities/CodeEditor';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    const initCodes = {
        html: '',
        css: '',
        js: '',
    };
    const [codes, setCodes] = useState<CodesContentType>(initCodes);
    const onCopy = useCallback(
        (lang: languageType) => () => {
            const codeStringify = JSON.stringify(codes[lang]);
            navigator.clipboard.writeText(codeStringify);
        },
        [codes],
    );

    const langTabs = Object.keys(initCodes).map((lang) => ({
        value: lang as languageType, // TODO
        content: lang.toUpperCase(),
    }));

    return (
        <Page data-testid="AdminPanelPage">
            <Text title={t('Admin panel')} align={TextAlign.CENTER} />

            <CodeEditor
                codes={codes}
                setCodes={setCodes}
                previewHeight={256}
                previewWidth={450}
                langTabs={langTabs}
            />
            <Text
                title="Конвертер кода в JSON"
                size={TextSize.L}
                align={TextAlign.CENTER}
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
