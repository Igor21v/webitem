import React, { ReactNode } from 'react';
import { detectDevice } from '../detectDevice/detectDevice';

export const BrowserView = ({ children }: { children: ReactNode }) => {
    const isMobile = detectDevice();
    if (!isMobile) {
        return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{children}</>
        );
    }
    return null;
};
