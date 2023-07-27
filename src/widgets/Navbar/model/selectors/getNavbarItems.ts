import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        {
            path: 'main',
            text: 'Main',
            fill: true,
            ImgOffsetX: 0,
            ImgOffsetY: 0,
        },
        {
            path: 'items',
            pathParam: 'all',
            text: 'All items',
            fill: true,
            ImgOffsetX: 32,
            ImgOffsetY: 0,
        },
        {
            path: 'favourites',
            text: 'Favourites',
            ImgOffsetX: 64,
            ImgOffsetY: 0,
        },
        {
            path: 'about',
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
                path: 'admin_panel',
                text: 'Admin panel',
                fill: true,
                ImgOffsetX: 160,
                ImgOffsetY: 0,
            },
        );
    }

    return navbarItemsList;
});
