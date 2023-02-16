import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from '@/app/providers/router/testing';

export const RouterDecorator =
    (route = '/') =>
    (StoryComponent: Story) => {
        const renderWithWrapper = (route: AppRouteProps) => {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<StoryComponent />}
                />
            );
        };

        return (
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    {Object.values(routeConfig).map(renderWithWrapper)}
                </Routes>
            </MemoryRouter>
        );
    };

/*  <BrowserRouter>
        <StoryComponent />
    </BrowserRouter> */
