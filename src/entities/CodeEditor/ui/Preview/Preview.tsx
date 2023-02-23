import { memo, useEffect, useState } from 'react';
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
    useEffect(() => {
        const timeOut = setTimeout(() => {
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
