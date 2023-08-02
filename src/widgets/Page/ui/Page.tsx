/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUIScrollByPath, uIActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useNonInitialEffect } from '@/shared/lib/hooks/useNonInitialEffect/useNonInitialEffect';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

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
    const debouncedSetPD = useDebounce(setPageDimensions, 500);
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            debouncedSetPD();
        });
        observer.observe(wrapperRef?.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    let setScrollPosition = () => {};
    const onScroll = () => {
        const scroll = wrapperRef.current.scrollTop;
        setScrollPosition = () => {
            dispatch(
                uIActions.setScrollPosition({
                    position: scroll,
                    path: pathname,
                }),
            );
        };
    };
    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
        return () => {
            setScrollPosition();
        };
    }, [pathname]);
    useNonInitialEffect(() => {
        wrapperRef.current.scrollTop = 0;
    }, [pathname]);

    /* useInitialEffect(() => {
        const observer = new MutationObserver((mutationRecords) => {
            console.log('mutation PAGE'); // console.log(изменения)
        });
        observer.observe(wrapperRef.current, {
            childList: true, // наблюдать за непосредственными детьми
            subtree: false, // и более глубокими потомками
            characterDataOldValue: true, // передавать старое значение в колбэк
        });
    });
    console.log('RENDER PAGE'); */

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
