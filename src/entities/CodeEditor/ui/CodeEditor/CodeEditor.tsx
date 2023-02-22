/* eslint-disable no-nested-ternary */
/* eslint-disable i18next/no-literal-string */
import { memo, useEffect, useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { Button } from '@/shared/ui/Button';
import { Editor } from '../Editor/Editor';

interface CodeEditorProps {
    className?: string;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const { className } = props;
    const [openedEditor, setOpenedEditor] = useState('html');
    const [htmlContent, setHtml] = useState('<div>2</div>');
    const [cssContent, setCss] = useState('');
    const [jsContent, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState(``);

    const onTabClick = (editorName: string) => {
        setOpenedEditor(editorName);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(
                `
          <html>
            <body>${htmlContent}</body>
            <style>${cssContent}</style>
            <script>${jsContent}</script>
          </html>
        `,
            );
        }, 250);

        return () => clearTimeout(timeOut);
    }, [htmlContent, cssContent, jsContent]);
    return (
        <div className={classNames(cls.CodeEditor, {}, [className])}>
            <div className="tab-button-container">
                <Button
                    onClick={() => {
                        onTabClick('html');
                    }}
                >
                    HTML
                </Button>
                <Button
                    onClick={() => {
                        onTabClick('css');
                    }}
                >
                    CSS
                </Button>
                <Button
                    title="JavaScript"
                    onClick={() => {
                        onTabClick('js');
                    }}
                >
                    JavaScript
                </Button>
            </div>
            <div className="editor-container">
                {openedEditor === 'html' ? (
                    <Editor
                        language={html}
                        value={htmlContent}
                        setEditorState={setHtml}
                    />
                ) : openedEditor === 'css' ? (
                    <Editor
                        language={css}
                        value={cssContent}
                        setEditorState={setCss}
                    />
                ) : (
                    <Editor
                        language={javascript}
                        value={jsContent}
                        setEditorState={setJs}
                    />
                )}
            </div>
            <div>
                <iframe
                    id="my_iframe"
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="1"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
});
