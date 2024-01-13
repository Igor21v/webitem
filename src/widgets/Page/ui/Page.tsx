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
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

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

    // Измерение размера страницы
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

    // Бесконечная прокрутка
    useInfiniteScroll({
        triggerRef,
        callback: onScrollEnd,
    });

    // Запоминание скролла
    const { isScreenXl } = useResizeWindow();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );
    const setScrollPosition = useRef(() => {});
    const onScroll = () => {
        const scroll = isScreenXl
            ? wrapperRef.current.scrollTop
            : window.scrollY;
        setScrollPosition.current = () => {
            dispatch(
                uIActions.setScrollPosition({
                    position: scroll,
                    path: pathname,
                }),
            );
        };
    };
    useEffect(() => {
        const scrollElement = isScreenXl ? wrapperRef.current : window;
        scrollElement.addEventListener('scroll', onScroll);
        scrollElement.scrollTo(0, scrollPosition);
        return () => {
            setScrollPosition.current();
            scrollElement.removeEventListener('scroll', onScroll);
        };
    }, [pathname]);
    useNonInitialEffect(() => {
        const scrollElement = isScreenXl ? wrapperRef.current : window;
        scrollElement.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
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
