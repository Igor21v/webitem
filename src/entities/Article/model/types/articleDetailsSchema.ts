import { Article } from './article';

export interface ArticleDetailsSchema {
    isLoading: Boolean;
    error?: string;
    data?: Article;
}
