import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteItems,
    getRouteFavourites,
    getRouteMain,
    getRouteAdmin,
} from '@/shared/const/router';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main',
            fill: true,
        },
        {
            path: getRouteItems('all'),
            text: 'All items',
            fill: true,
        },
        {
            path: getRouteFavourites(),
            text: 'Favourites',
        },
        {
            path: getRouteAbout(),
            text: 'About',
            fill: true,
        },
    ];

    if (userData) {
        navbarItemsList.push(
            /*             {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                authOnly: true,
                fill: true,
            }, */
            {
                path: getRouteAdmin(),
                text: 'Admin panel',
                fill: true,
            },
        );
    }

    return navbarItemsList;
});
