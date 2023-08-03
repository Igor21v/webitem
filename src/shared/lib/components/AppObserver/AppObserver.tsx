/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect, useRef } from 'react';

interface AppObserverProps {
    callback?: () => void;
    wrapperRef?: MutableRefObject<HTMLElement>;
    className?: string;
}

export const PAGE_ID = 'PAGE_ID';

export const AppObserver = (props: AppObserverProps) => {
    const { callback, wrapperRef, className } = props;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '350px',
                threshold: 1,
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
    }, [callback, wrapperRef]);

    return <div className={className} ref={triggerRef} />;
};
