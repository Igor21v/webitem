import { createSelector } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { getRoute, langType } from '@/shared/const/router';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const { i18n } = useTranslation();
    const lang = i18n.language as langType;
    const navbarItemsList: NavbarItemType[] = [
        {
            path: getRoute('main', lang),
            text: 'Main',
            fill: true,
            ImgOffsetX: 0,
            ImgOffsetY: 0,
        },
        {
            path: getRoute('items', lang, 'all'),
            text: 'All items',
            fill: true,
            ImgOffsetX: 32,
            ImgOffsetY: 0,
        },
        {
            path: getRoute('favourites', lang),
            text: 'Favourites',
            ImgOffsetX: 64,
            ImgOffsetY: 0,
        },
        {
            path: getRoute('about', lang),
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
                path: getRoute('admin_panele', lang),
                text: 'Admin panel',
                fill: true,
                ImgOffsetX: 128,
                ImgOffsetY: 0,
            },
        );
    }

    return navbarItemsList;
});
