import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteItems,
    getRouteFavourites,
    getRouteMain,
    getRouteProfile,
    getRouteAdmin,
} from '@/shared/const/router';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ItemIcon from '@/shared/assets/icons/item-20-20.svg';
import LikeIcon from '@/shared/assets/icons/like.svg';
import AdminIcon from '@/shared/assets/icons/admin.svg';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Main',
            fill: true,
        },
        {
            path: getRouteItems('all'),
            Icon: ItemIcon,
            text: 'All items',
            fill: true,
        },
        {
            path: getRouteFavourites(),
            Icon: LikeIcon,
            text: 'Favourites',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'About',
            fill: true,
        },
    ];

    if (userData) {
        navbarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
                fill: true,
            },
            {
                path: getRouteAdmin(),
                Icon: AdminIcon,
                text: 'Admin panel',
                fill: true,
            },
        );
    }

    return navbarItemsList;
});
