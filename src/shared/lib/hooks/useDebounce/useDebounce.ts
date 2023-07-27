import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук, устанавливающий задержку срабатывания колбэка, колбэк будет вызван когда не будет повторных вызовов хука в течении заданного времени
 * @param callback
 * @param delay - задержка в мс
 * @returns
 */

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;
    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
