import { memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Preview.module.scss';

interface PreviewProps {
    className?: string;
    htmlContent?: string;
    cssContent?: string;
    jsContent?: string;
}

export const Preview = memo((props: PreviewProps) => {
    const { className, cssContent, htmlContent, jsContent } = props;
    const [srcDoc, setSrcDoc] = useState(``);
    const iframeKey = useRef(0);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            iframeKey.current = Math.random();
            setSrcDoc(
                `
          <html>
            <body>${htmlContent}</body>
            <style>${cssContent}</style>
            <script>${jsContent}</script>
          </html>
        `,
            );
        }, 250);

        return () => clearTimeout(timeOut);
    }, [htmlContent, cssContent, jsContent]);
    return (
        <div className={classNames(cls.Preview, {}, [className])}>
            <iframe
                key={iframeKey.current}
                id="my_iframe"
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                height="100%"
                width="100%"
            />
        </div>
    );
});
