import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
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
import {
    CodeMirrorType,
    LangCssType,
    LangHtmlType,
    LangJsType,
} from './EditorWrapper';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface EditorWrapperProps {
    className?: string;
    openedEditor: languageType;
    content: CodesContentType;
    setContent: (codes: CodesContentType) => void;
    theme: EditorThemeType;
}

interface EditorProps extends EditorWrapperProps {
    CodeMirror: CodeMirrorType;
    LangHtml: LangHtmlType;
    LangCss: LangCssType;
    LangJs: LangJsType;
}

export const Editor = memo((props: EditorProps) => {
    const {
        className,
        openedEditor,
        content,
        setContent,
        theme,
        CodeMirror,
        LangCss,
        LangHtml,
        LangJs,
    } = props;
    const handleChange = (value: string | undefined) => {
        setContent({ ...content, [openedEditor]: value });
    };
    const useCodeMirror = CodeMirror?.useCodeMirror;
    const currLang = useMemo(() => {
        switch (openedEditor) {
            case 'html':
                return {
                    currLang: LangHtml.html,
                    currContent: content.html || '',
                };
            case 'css':
                return {
                    currLang: LangCss.css,
                    currContent: content.css || '',
                };
            default:
                return {
                    currLang: LangJs.javascript,
                    currContent: content.js || '',
                };
        }
    }, [
        LangCss.css,
        LangHtml.html,
        LangJs.javascript,
        content.css,
        content.html,
        content.js,
        openedEditor,
    ]);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(currLang.currContent);
    }, [currLang.currContent]);

    const editor = useRef<HTMLInputElement>(null);
    const { setContainer } = useCodeMirror({
        container: editor.current,
        extensions: [currLang.currLang()],
        value: currLang.currContent,
        onChange: handleChange,
        minHeight: '200px',
        theme,
    });

    useEffect(() => {
        if (editor.current) {
            setContainer(editor.current);
        }
    }, [setContainer]);

    return (
        <div className={cls.Editor}>
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
