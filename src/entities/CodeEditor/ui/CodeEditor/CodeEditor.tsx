import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';
import { CODE_EDITOR_THEME_KEY } from '@/shared/const/localstorage';
import { CodesContentType, languageType } from '@/shared/types/codes';
import { EditorWrapper } from '../Editor/EditorWrapper';

export type EditorThemeType = 'none' | 'dark' | 'light';

interface CodeEditorProps {
    className?: string;
    codes?: CodesContentType;
    setCodes: (codes: CodesContentType) => void;
    previewHeight?: number;
    previewWidth?: number;
    langTabs: TabItem<languageType>[];
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const {
        className,
        setCodes,
        codes = { html: '', css: '', js: '' },
        langTabs,
        previewHeight,
        previewWidth,
    } = props;

    const defaultEditorTheme =
        (localStorage.getItem(CODE_EDITOR_THEME_KEY) as EditorThemeType) ||
        'none';
    const [editorTheme, setEditorTheme] =
        useState<EditorThemeType>(defaultEditorTheme);
    const [openedEditor, setOpenedEditor] = useState<languageType>('html');

    const onTabClick = useCallback((tab: TabItem<languageType>) => {
        setOpenedEditor(tab.value);
    }, []);

    return (
        <div
            className={classNames(cls.CodeEditor, {}, [
                className,
                'scroll-thin',
            ])}
        >
            <Preview
                htmlContent={codes.html}
                cssContent={codes.css}
                jsContent={codes.js}
                height={previewHeight}
                width={previewWidth}
            />
            <EditorWrapper
                openedEditor={openedEditor}
                content={codes}
                setContent={setCodes}
                theme={editorTheme}
                className={cls.editor}
            />
            <HStack justify="between" align="start">
                <Tabs<languageType>
                    tabs={langTabs}
                    value={openedEditor}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
                <ThemeSelect
                    editorTheme={editorTheme}
                    setEditorTheme={setEditorTheme}
                />
            </HStack>
        </div>
    );
});
