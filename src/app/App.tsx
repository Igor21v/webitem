import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavbarMobile } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';
import { useLangInit } from '@/shared/lib/hooks/useLangInit/useLangInit';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { MainLayoutMobile } from '@/shared/layouts/MainLayoutMobile';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    const inited = useSelector(getUserInited);
    const { isScreenXl } = useResizeWindow();
    useLangInit();

    return (
        <Suspense fallback="">
            {isScreenXl && inited ? (
                <MainLayout
                    navbar={<Navbar />}
                    sidebar={<Sidebar />}
                    content={<AppRouter />}
                />
            ) : (
                <MainLayoutMobile
                    navbar={<NavbarMobile />}
                    content={<AppRouter />}
                />
            )}
        </Suspense>
    );
}
