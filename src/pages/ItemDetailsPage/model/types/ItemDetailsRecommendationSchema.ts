import { EntityState } from '@reduxjs/toolkit';
import { Item } from '@/entities/Item';

export interface ItemDetailsRecommendationSchema extends EntityState<Item> {
    isLoading?: boolean;
    error?: string;
}
