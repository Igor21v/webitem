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
            ImgOffsetX: 0,
            ImgOffsetY: 0,
        },
        {
            path: getRouteItems('all'),
            text: 'All items',
            fill: true,
            ImgOffsetX: 32,
            ImgOffsetY: 0,
        },
        {
            path: getRouteFavourites(),
            text: 'Favourites',
            ImgOffsetX: 64,
            ImgOffsetY: 0,
        },
        {
            path: getRouteAbout(),
            text: 'About',
            fill: true,
            ImgOffsetX: 96,
            ImgOffsetY: 0,
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
                ImgOffsetX: 128,
                ImgOffsetY: 0,
            },
        );
    }

    return navbarItemsList;
});
