import { memo, useMemo, useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { Editor } from '../Editor/Editor';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';

interface CodeEditorProps {
    className?: string;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const { className } = props;
    const [openedEditor, setOpenedEditor] = useState('html');
    const [htmlContent, setHtmlContent] = useState('<div>2</div>');
    const [cssContent, setCssContent] = useState('');
    const [jsContent, setJsContent] = useState('');

    const onTabClick = (tab: TabItem) => {
        setOpenedEditor(tab.value);
    };
    const langTabs = useMemo(
        () => [
            {
                value: 'html',
                content: 'HTML',
            },
            {
                value: 'css',
                content: 'CSS',
            },
            {
                value: 'js',
                content: 'JS',
            },
        ],
        [],
    );
    let editorCurrLang;
    let editorCurrValue;
    let editorCurrSetState;
    switch (openedEditor) {
        case 'html':
            editorCurrLang = html;
            editorCurrValue = htmlContent;
            editorCurrSetState = setHtmlContent;
            break;
        case 'css':
            editorCurrLang = css;
            editorCurrValue = cssContent;
            editorCurrSetState = setCssContent;
            break;
        default:
            editorCurrLang = javascript;
            editorCurrValue = jsContent;
            editorCurrSetState = setJsContent;
    }

    return (
        <div className={classNames(cls.CodeEditor, {}, [className])}>
            <Tabs
                tabs={langTabs}
                value={openedEditor}
                onTabClick={onTabClick}
                className={classNames('', {}, [className])}
            />
            <Editor
                language={editorCurrLang}
                value={editorCurrValue}
                setEditorState={editorCurrSetState}
            />
            <Preview
                htmlContent={htmlContent}
                cssContent={cssContent}
                jsContent={jsContent}
            />
        </div>
    );
});
