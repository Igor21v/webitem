import { memo, useEffect, useRef, useState } from 'react';
import { Editor, EditorWrapperProps } from './Editor';

export type CodeMirrorType = typeof import('@uiw/react-codemirror');
export type LangHtmlType = typeof import('@codemirror/lang-html');
export type LangCssType = typeof import('@codemirror/lang-css');
export type LangJsType = typeof import('@codemirror/lang-javascript');

const getAsyncCodeMirror = async () => {
    return Promise.all([
        import('@uiw/react-codemirror'),
        import('@codemirror/lang-html'),
        import('@codemirror/lang-css'),
        import('@codemirror/lang-javascript'),
    ]);
};

export const EditorWrapper = memo((props: EditorWrapperProps) => {
    const CodeMirrorRef = useRef<CodeMirrorType>();
    const LangHtmlRef = useRef<LangHtmlType>();
    const LangCssRef = useRef<LangCssType>();
    const LangJsRef = useRef<LangJsType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncCodeMirror().then(([CodeMirror, LangHtml, LangCss, LangJs]) => {
            CodeMirrorRef.current = CodeMirror;
            LangHtmlRef.current = LangHtml;
            LangCssRef.current = LangCss;
            LangJsRef.current = LangJs;
            setIsLoaded(true);
        });
    }, []);

    if (
        !isLoaded ||
        !CodeMirrorRef.current ||
        !LangHtmlRef.current ||
        !LangCssRef.current ||
        !LangJsRef.current
    ) {
        return null;
    }

    return (
        <Editor
            CodeMirror={CodeMirrorRef.current}
            LangHtml={LangHtmlRef.current}
            LangCss={LangCssRef.current}
            LangJs={LangJsRef.current}
            {...props}
        />
    );
});
