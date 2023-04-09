import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

export type CodeMirrorType = typeof import('@uiw/react-codemirror');
export type LangHtmlType = typeof import('@codemirror/lang-html');
export type LangCssType = typeof import('@codemirror/lang-css');
export type LangJsType = typeof import('@codemirror/lang-javascript');

interface CodeMirrorContextPayload {
    CodeMirror?: CodeMirrorType;
    LangHtml?: LangHtmlType;
    LangCss?: LangCssType;
    LangJs?: LangJsType;
    isLoaded?: boolean;
}

const CodeMirrorContext = createContext<CodeMirrorContextPayload>({});

const getAsyncCodeMirror = async () => {
    return Promise.all([
        import('@uiw/react-codemirror'),
        import('@codemirror/lang-html'),
        import('@codemirror/lang-css'),
        import('@codemirror/lang-javascript'),
    ]);
};

export const useCodeMirrorLib = () => {
    return useContext(CodeMirrorContext) as Required<CodeMirrorContextPayload>;
};

export const CodeMirrorProvider = ({ children }: { children: ReactNode }) => {
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

    const value = useMemo(
        () => ({
            CodeMirror: CodeMirrorRef.current,
            LangHtml: LangHtmlRef.current,
            LangCss: LangCssRef.current,
            LangJs: LangJsRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <CodeMirrorContext.Provider value={value}>
            {children}
        </CodeMirrorContext.Provider>
    );
};
