import { memo, useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { Editor } from '../Editor/Editor';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';

interface blocksType {
    HTML: string;
    CSS?: string;
    JS?: string;
}

interface CodeEditorProps {
    className?: string;
    blocks: blocksType;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const { className, blocks } = props;
    const [openedEditor, setOpenedEditor] = useState('HTML');
    const [htmlContent, setHtmlContent] = useState(blocks.HTML);
    const [cssContent, setCssContent] = useState(blocks.CSS);
    const [jsContent, setJsContent] = useState(blocks.JS);

    const onTabClick = (tab: TabItem) => {
        setOpenedEditor(tab.value);
    };

    const langTabs = Object.entries(blocks).map(([lang]) => ({
        value: lang,
        content: lang,
    }));

    let editorCurrLang;
    let editorCurrValue;
    let editorCurrSetState;
    switch (openedEditor) {
        case 'HTML':
            editorCurrLang = html;
            editorCurrValue = htmlContent;
            editorCurrSetState = setHtmlContent;
            break;
        case 'CSS':
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
        <div
            className={classNames(cls.CodeEditor, {}, [
                className,
                'scroll-thin',
            ])}
        >
            <Tabs
                tabs={langTabs}
                value={openedEditor}
                onTabClick={onTabClick}
                className={classNames('', {}, [className])}
            />
            <Editor
                className="scroll-thin"
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
