import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CodeEditor.module.scss';
import { Editor } from '../Editor/Editor';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Preview } from '../Preview/Preview';

export type languageType = 'html' | 'css' | 'js';

export type ContentType = Record<languageType, string | undefined>;

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
    const [openedEditor, setOpenedEditor] = useState<languageType>('html');
    const [сontent, setContent] = useState<ContentType>({
        html: blocks.HTML,
        css: blocks.CSS,
        js: blocks.JS,
    });

    const onTabClick = (tab: TabItem<languageType>) => {
        setOpenedEditor(tab.value);
    };

    const langTabs = Object.entries(blocks).map(([lang]) => ({
        value: lang.toLowerCase() as languageType,
        content: lang,
    }));

    return (
        <div
            className={classNames(cls.CodeEditor, {}, [
                className,
                'scroll-thin',
            ])}
        >
            <Tabs<languageType>
                tabs={langTabs}
                value={openedEditor}
                onTabClick={onTabClick}
                className={classNames('', {}, [className])}
            />
            <Editor
                openedEditor={openedEditor}
                content={сontent}
                setContent={setContent}
            />
            <Preview
                htmlContent={сontent.html}
                cssContent={сontent.css}
                jsContent={сontent.js}
            />
        </div>
    );
});
