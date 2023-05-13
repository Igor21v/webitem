import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUIScrollByPath, uIActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd, ...otherProps } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );
    const setPageDimensions = () => {
        if (
            wrapperRef.current?.clientWidth &&
            wrapperRef.current?.clientHeight
        ) {
            dispatch(
                uIActions.setPageDimensions({
                    width: wrapperRef.current?.clientWidth,
                    height: wrapperRef.current?.clientHeight,
                }),
            );
        }
    };
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            setPageDimensions();
        });
        observer.observe(wrapperRef?.current);
        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uIActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 2000);
    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            {...otherProps}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
};
