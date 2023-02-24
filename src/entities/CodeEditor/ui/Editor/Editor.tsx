import React, {
    Dispatch,
    memo,
    SetStateAction,
    useEffect,
    useRef,
} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { LanguageSupport } from '@codemirror/language';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Editor.module.scss';
import { ContentType, languageType } from '../CodeEditor/CodeEditor';

interface EditorProps {
    className?: string;
    openedEditor: languageType;
    content: ContentType;
    setContent: Dispatch<SetStateAction<ContentType>>;
}

type htmlType = typeof import('@codemirror/lang-html');
type cssType = typeof import('@codemirror/lang-css');
type javascriptType = typeof import('@codemirror/lang-javascript');
const getAsyncCodeModules = async () => {
    return Promise.all([
        import('@codemirror/lang-html'),
        import('@codemirror/lang-css'),
        import('@codemirror/lang-javascript'),
    ]);
};

export const Editor = memo((props: EditorProps) => {
    const { className, openedEditor, content, setContent } = props;
    const handleChange = (value: string | undefined) => {
        setContent({ ...content, [openedEditor]: value });
    };

    const htmlRef = useRef<htmlType>();
    const cssRef = useRef<cssType>();
    const javascriptRef = useRef<javascriptType>();
    useEffect(() => {
        getAsyncCodeModules().then(([html, css, javascript]) => {
            htmlRef.current = html;
            cssRef.current = css;
            javascriptRef.current = javascript;
        });
    }, []);
    let currLang: (() => LanguageSupport) | undefined;
    let currContent;
    switch (openedEditor) {
        case 'html':
            currLang = htmlRef.current?.html;
            currContent = content.html;
            break;
        case 'css':
            currLang = cssRef.current?.css;
            currContent = content.css;
            break;
        default:
            currLang = javascriptRef.current?.javascript;
            currContent = content.js;
    }

    const getLang = () => {
        if (currLang) {
            return [currLang()];
        }
        return [];
    };

    return (
        <CodeMirror
            className={classNames(cls.Editor, {}, [className, 'scroll-thin'])}
            onChange={handleChange}
            value={currContent}
            minHeight="200px"
            theme="dark"
            extensions={getLang()}
        />
    );
});
