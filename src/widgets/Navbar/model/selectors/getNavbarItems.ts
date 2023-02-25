import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteItems,
    getRouteFavourites,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ItemIcon from '@/shared/assets/icons/item-20-20.svg';
import FavouriteIcon from '@/shared/assets/icons/favourite-20-20.svg';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Main',
        },
        {
            path: getRouteItems('all'),
            Icon: ItemIcon,
            text: 'All items',
        },
        {
            path: getRouteFavourites(),
            Icon: FavouriteIcon,
            text: 'Favourites',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'About',
        },
    ];

    if (userData) {
        navbarItemsList.push({
            path: getRouteProfile(userData.id),
            Icon: ProfileIcon,
            text: 'Profile',
            authOnly: true,
        });
    }

    return navbarItemsList;
});
