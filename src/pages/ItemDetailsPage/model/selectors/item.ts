import { createSelector } from '@reduxjs/toolkit';
import { getItemDetailsData } from '@/entities/Item';
import { getUserAuthData } from '@/entities/User';

export const getCanEditItem = createSelector(
    getItemDetailsData,
    getUserAuthData,
    (item, user) => {
        if (!item || !user) {
            return false;
        }
        return item?.user.id === user.id;
    },
);
