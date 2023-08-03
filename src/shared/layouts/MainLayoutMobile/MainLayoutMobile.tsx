import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayoutMobile.module.scss';

interface MainLayoutProps {
    navbar: ReactElement;
    content: ReactElement;
}

export const MainLayoutMobile = memo((props: MainLayoutProps) => {
    const { content, navbar } = props;

    return (
        <div className={classNames(cls.MainLayoutMobile, {}, ['app'])} id="app">
            <div className={cls.navbar}>{navbar}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
});
