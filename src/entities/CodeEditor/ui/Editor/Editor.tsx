import React, { Dispatch, memo, SetStateAction } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Editor.module.scss';
import { ContentType, EditorThemeType } from '../CodeEditor/CodeEditor';
import { languageType } from '@/shared/types/codes';

interface EditorProps {
    className?: string;
    openedEditor: languageType;
    content: ContentType;
    setContent: Dispatch<SetStateAction<ContentType>>;
    theme: EditorThemeType;
}

export const Editor = memo((props: EditorProps) => {
    const { className, openedEditor, content, setContent, theme } = props;
    const handleChange = (value: string | undefined) => {
        setContent({ ...content, [openedEditor]: value });
    };

    let currLang;
    let currContent;
    switch (openedEditor) {
        case 'html':
            currLang = html;
            currContent = content.html;
            break;
        case 'css':
            currLang = css;
            currContent = content.css;
            break;
        default:
            currLang = javascript;
            currContent = content.js;
    }

    return (
        <CodeMirror
            className={classNames(cls.Editor, {}, [className, 'scroll-thin'])}
            onChange={handleChange}
            value={currContent}
            minHeight="200px"
            theme={theme}
            extensions={[currLang()]}
        />
    );
});
