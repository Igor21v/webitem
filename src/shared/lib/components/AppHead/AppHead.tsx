import { memo } from 'react';
import { Portal } from '../../../ui/Portal';

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
