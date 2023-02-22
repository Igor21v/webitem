/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import React, { memo, useState } from 'react';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Editor.module.scss';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

type TODO_any = any;

interface EditorProps {
    className?: string;
    language: TODO_any;
    value: TODO_any;
    setEditorState: TODO_any;
}

export const Editor = memo((props: EditorProps) => {
    const { className, language, setEditorState, value } = props;
    const { t } = useTranslation();
    const [theme, setTheme] = useState('dracula');
    const handleChange = (
        editor: TODO_any,
        data: TODO_any,
        value: TODO_any,
    ) => {
        setEditorState(value);
    };

    const themeArray = [
        'dracula',
        'material',
        'mdn-like',
        'the-matrix',
        'night',
    ];

    return (
        <div className={classNames('editor-container', {}, [className])}>
            <div style={{ marginBottom: '10px' }}>
                Choose a theme:
                <select
                    name="theme"
                    onChange={(el) => {
                        setTheme(el.target.value);
                    }}
                >
                    {themeArray.map((theme) => (
                        <option value={theme}>{theme}</option>
                    ))}
                </select>
            </div>
            <ControlledEditorComponent
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                }}
            />
        </div>
    );
});
