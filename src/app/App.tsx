import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar, NavbarMobile } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const { i18n } = useTranslation();
    const { lang } = useParams();
    console.log(`GGGG${lang}`);
    const path = document.location.pathname;
    const langPath = path.split('/')?.[1];
    useEffect(() => {
        console.log('212');
        if (langPath === 'en') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ru');
        }
    }, [i18n, langPath]);

    const inited = useSelector(getUserInited);
    const { isScreenXl } = useResizeWindow();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                {isScreenXl && <Navbar />}
                {!isScreenXl && <NavbarMobile />}
                <div className="content-page">
                    {isScreenXl && <Sidebar />}
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
