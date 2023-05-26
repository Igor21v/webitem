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
        isScreenSm: width > RESIZEBREAKPOINTS.SM,
        isScreenMd: width >= RESIZEBREAKPOINTS.MD,
        // isScreenLg: width >= LG,
        isScreenXl: width > RESIZEBREAKPOINTS.XL,
        /*         isScreenXxl: width >= XXL, */
    };
};
