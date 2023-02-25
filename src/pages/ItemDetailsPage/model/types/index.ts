import { ItemDetailsCommentsSchema } from './ItemDetailsCommentsSchema';
import { ItemDetailsRecommendationSchema } from './ItemDetailsRecommendationSchema';

export interface ItemDetailsPageSchema {
    comments: ItemDetailsCommentsSchema;
    recommendations: ItemDetailsRecommendationSchema;
}
