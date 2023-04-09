import React, { memo, useCallback, useEffect, useRef } from 'react';
/* import CodeMirror from '@uiw/react-codemirror'; */
/* import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript'; */
/* import { useCodeMirror } from '@uiw/react-codemirror'; */
import cls from './Editor.module.scss';
import { EditorThemeType } from '../CodeEditor/CodeEditor';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { CodeMirrorProvider, useCodeMirrorLib } from './CodeMirrorProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

interface EditorProps {
    className?: string;
    openedEditor: languageType;
    content: CodesContentType;
    setContent: (codes: CodesContentType) => void;
    theme: EditorThemeType;
}

export const EditorContent = memo((props: EditorProps) => {
    const { CodeMirror, LangCss, LangHtml, LangJs } = useCodeMirrorLib();
    const useCodeMirror = CodeMirror?.useCodeMirror;
    const { className, openedEditor, content, setContent, theme } = props;
    const handleChange = (value: string | undefined) => {
        setContent({ ...content, [openedEditor]: value });
    };

    let currLang;
    let currContent: string;
    switch (openedEditor) {
        case 'html':
            currLang = LangHtml.html;
            currContent = content.html || '';
            break;
        case 'css':
            currLang = LangCss.css;
            currContent = content.css || '';
            break;
        default:
            currLang = LangJs.javascript;
            currContent = content.js || '';
    }

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(currContent);
    }, [currContent]);

    const editor = useRef<HTMLInputElement>(null);
    const { setContainer } = useCodeMirror({
        container: editor.current,
        extensions: [currLang()],
        value: currContent,
        onChange: handleChange,
        minHeight: '200px',
        theme,
    });

    useEffect(() => {
        if (editor.current) {
            setContainer(editor.current);
        }
    }, [editor.current]);

    return (
        <div className={cls.Editor}>
            {/* <CodeMirror
                className={classNames(cls.codeMirror, {}, [
                    className,
                    'scroll-thin',
                ])}
                onChange={handleChange}
                value={currContent}
                minHeight="200px"
                theme={theme}
                extensions={[currLang()]}
            /> */}
            <div
                ref={editor}
                className={classNames(cls.codeMirror, {}, [
                    className,
                    'scroll-thin',
                ])}
            />
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
        </div>
    );
});

const EditorAsync = (props: EditorProps) => {
    const { isLoaded } = useCodeMirrorLib();

    if (!isLoaded) {
        return null;
    }

    return <EditorContent {...props} />;
};

export const Editor = (props: EditorProps) => {
    return (
        <CodeMirrorProvider>
            <EditorAsync {...props} />
        </CodeMirrorProvider>
    );
};
