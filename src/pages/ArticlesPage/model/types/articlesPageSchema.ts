import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';

import { SortOrder } from '@/shared/types';
import { ElementTypes } from '@/entities/Article/model/consts/ElementList';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ElementTypes;

    _inited: boolean;
}
