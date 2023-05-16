import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    const inited = useSelector(getUserInited);
    const { isScreenXl } = useResizeWindow();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                {isScreenXl && <Navbar />}
                <div className="content-page">
                    {isScreenXl && <Sidebar />}
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
