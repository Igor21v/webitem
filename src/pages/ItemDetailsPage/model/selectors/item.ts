import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';

export const getCanEditItem = createSelector(getUserAuthData, (user) => {
    if (!article || !user) {
        return false;
    }
    return article?.user.id === user.id;
});
