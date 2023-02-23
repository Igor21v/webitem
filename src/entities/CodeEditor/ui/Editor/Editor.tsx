import React, { memo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Editor.module.scss';

export interface EditorProps {
    className?: string;
    language: () => Extension;
    value: string;
    setEditorState: (value: string) => void;
}

export const Editor = memo((props: EditorProps) => {
    const { className, language, setEditorState, value } = props;
    const handleChange = (value: string) => {
        setEditorState(value);
    };

    return (
        <div>
            <CodeMirror
                className={classNames(cls.Editor, {}, [className])}
                onChange={handleChange}
                value={value}
                minHeight="200px"
                theme="dark"
                extensions={[language()]}
            />
        </div>
    );
});
