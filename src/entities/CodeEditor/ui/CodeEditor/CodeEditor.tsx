/* eslint-disable no-nested-ternary */
/* eslint-disable i18next/no-literal-string */
import { memo, useEffect, useState } from 'react';
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

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState(``);

    const onTabClick = (editorName: string) => {
        setOpenedEditor(editorName);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(
                `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `,
            );
        }, 250);

        return () => clearTimeout(timeOut);
    }, [html, css, js]);
    return (
        <div className={classNames(cls.CodeEditor, {}, [className])}>
            <p>Welcome to the edior</p>
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
                        language="xml"
                        value={html}
                        setEditorState={setHtml}
                    />
                ) : openedEditor === 'css' ? (
                    <Editor
                        language="css"
                        value={css}
                        setEditorState={setCss}
                    />
                ) : (
                    <Editor
                        language="javascript"
                        value={js}
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
