import { useState, useEffect } from 'react';
import { SCREEN_MD, SCREEN_SM, SCREEN_XL } from './ResizeBreakpoints';

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
        isScreenSm: width > SCREEN_SM,
        isScreenMd: width >= SCREEN_MD,
        // isScreenLg: width >= SCREEN_LG,
        isScreenXl: width > SCREEN_XL,
        /*         isScreenXxl: width >= SCREEN_XXL, */
    };
};
