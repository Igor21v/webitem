import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    wrapperRef,
    triggerRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement);
            return () => {
                if (observer && triggerElement) {
                    observer?.unobserve(triggerElement);
                }
            };
        }
        return undefined;
    }, [callback, triggerRef, wrapperRef]);
}
