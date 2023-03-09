import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';
import { Editor } from '../Editor/Editor';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';
import { CODE_EDITOR_THEME_KEY } from '@/shared/const/localstorage';
import { CodesContentType, languageType } from '@/shared/types/codes';

export type EditorThemeType = 'none' | 'dark' | 'light';

interface CodeEditorProps {
    className?: string;
    codes?: CodesContentType;
    setCodes: (codes: CodesContentType) => void;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const {
        className,
        setCodes,
        codes = { html: '', css: '', js: '' },
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

    const langTabs = useMemo(
        () =>
            Object.entries(codes).map(([lang]) => ({
                value: lang as languageType, // TODO
                content: lang.toUpperCase(),
            })),
        [codes],
    );

    return (
        <div
            className={classNames(cls.CodeEditor, {}, [
                className,
                'scroll-thin',
            ])}
        >
            <HStack justify="between" align="end">
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

            <Editor
                openedEditor={openedEditor}
                content={codes}
                setContent={setCodes}
                theme={editorTheme}
            />
            <Preview
                htmlContent={codes.html}
                cssContent={codes.css}
                jsContent={codes.js}
            />
        </div>
    );
});
