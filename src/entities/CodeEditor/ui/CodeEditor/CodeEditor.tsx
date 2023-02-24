import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';
import { Editor } from '../Editor/Editor';
import { HStack } from '@/shared/ui/Stack';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';
import { CODE_EDITOR_THEME_KEY } from '@/shared/const/localstorage';

export type languageType = 'html' | 'css' | 'js';

export type ContentType = Record<languageType, string | undefined>;

export type EditorThemeType = 'none' | 'dark' | 'light';

interface blocksType {
    HTML: string;
    CSS?: string;
    JS?: string;
}

interface CodeEditorProps {
    className?: string;
    blocks: blocksType;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
    const { className, blocks } = props;

    const defaultEditorTheme =
        (localStorage.getItem(CODE_EDITOR_THEME_KEY) as EditorThemeType) ||
        'none';
    const [editorTheme, setEditorTheme] =
        useState<EditorThemeType>(defaultEditorTheme);
    const [openedEditor, setOpenedEditor] = useState<languageType>('html');
    const [сontent, setContent] = useState<ContentType>({
        html: blocks.HTML,
        css: blocks.CSS,
        js: blocks.JS,
    });

    const onTabClick = useCallback((tab: TabItem<languageType>) => {
        setOpenedEditor(tab.value);
    }, []);

    const langTabs = useMemo(
        () =>
            Object.entries(blocks).map(([lang]) => ({
                value: lang.toLowerCase() as languageType,
                content: lang,
            })),
        [blocks],
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
                content={сontent}
                setContent={setContent}
                theme={editorTheme}
            />
            <Preview
                htmlContent={сontent.html}
                cssContent={сontent.css}
                jsContent={сontent.js}
            />
        </div>
    );
});
