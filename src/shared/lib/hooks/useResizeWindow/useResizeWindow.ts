import { useState, useEffect } from 'react';
import { RESIZEBREAKPOINTS } from './ResizeBreakpoints';

export const useResizeWindow = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenSm: width > RESIZEBREAKPOINTS.SCREEN_SM,
        isScreenMd: width >= RESIZEBREAKPOINTS.SCREEN_MD,
        // isScreenLg: width >= SCREEN_LG,
        isScreenXl: width > RESIZEBREAKPOINTS.SCREEN_XL,
        /*         isScreenXxl: width >= SCREEN_XXL, */
    };
};
