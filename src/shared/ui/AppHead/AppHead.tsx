import { memo } from 'react';
import { Portal } from '../Portal';

interface AppHeadProps {
    title?: string;
    description?: string;
}

export const AppHead = memo((props: AppHeadProps) => {
    const { title, description } = props;
    return (
        <Portal element={document.head}>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Portal>
    );
});
