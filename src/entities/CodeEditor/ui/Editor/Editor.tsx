import React, { memo, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Editor.module.scss';
import { EditorThemeType } from '../CodeEditor/CodeEditor';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface EditorProps {
    className?: string;
    openedEditor: languageType;
    content: CodesContentType;
    setContent: (codes: CodesContentType) => void;
    theme: EditorThemeType;
}

export const Editor = memo((props: EditorProps) => {
    const { className, openedEditor, content, setContent, theme } = props;
    const handleChange = (value: string | undefined) => {
        setContent({ ...content, [openedEditor]: value });
    };

    let currLang;
    let currContent: string;
    switch (openedEditor) {
        case 'html':
            currLang = html;
            currContent = content.html || '';
            break;
        case 'css':
            currLang = css;
            currContent = content.css || '';
            break;
        default:
            currLang = javascript;
            currContent = content.js || '';
    }

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(currContent);
    }, [currContent]);

    return (
        <div className={classNames(cls.Editor, {}, [className, 'scroll-thin'])}>
            <CodeMirror
                onChange={handleChange}
                value={currContent}
                minHeight="200px"
                theme={theme}
                extensions={[currLang()]}
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
