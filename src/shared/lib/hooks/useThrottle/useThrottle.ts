import { useCallback, useRef } from 'react';

/**
 * Хук, который вызывает колбэк и предотвращает повторный вызов в течении заданного времени
 * @param callback
 * @param delay
 * @returns
 */

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;
                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
