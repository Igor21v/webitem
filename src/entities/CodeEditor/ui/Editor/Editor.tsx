/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { classNames } from '@/shared/lib/classNames/classNames';

type TODO_any = any;

interface EditorProps {
    className?: string;
    language: TODO_any;
    value: TODO_any;
    setEditorState: TODO_any;
}

export const Editor = memo((props: EditorProps) => {
    const { className, language, setEditorState, value } = props;
    const handleChange = (value: TODO_any) => {
        setEditorState(value);
    };

    return (
        <div className={classNames('editor-container', {}, [className])}>
            <CodeMirror
                onChange={handleChange}
                value={value}
                minHeight="300px"
                theme="dark"
                extensions={[language()]}
            />
        </div>
    );
});
