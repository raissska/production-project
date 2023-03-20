import { Suspense, useCallback, useMemo } from 'react';

import { Route, Routes } from 'react-router-dom';
import 'app/styles/index.scss';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
// const isAuth = useSelector(getUserAuthData);

    // const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    //     if (route.authOnly && !isAuth) {
    //         return false;
    //     }
    //     return true;
    // }), [isAuth]);

    const renserWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {
                Object.values(routeConfig).map(renserWithWrapper)
            }
        </Routes>
    );
};
