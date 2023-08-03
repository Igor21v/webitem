import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    navbar: ReactElement;
    sidebar: ReactElement;
    content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { content, navbar, sidebar } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, ['app'])} id="app">
            <div className={cls.navbar}>{navbar}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content} id="content">
                {content}
            </div>
        </div>
    );
});
