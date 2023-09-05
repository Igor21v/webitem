import { memo } from 'react';
import { Portal } from '../../../ui/Portal';

interface AppHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
}

export const AppHead = memo((props: AppHeadProps) => {
    const { title, description, keywords } = props;
    return (
        <Portal element={document.head}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Portal>
    );
});
