import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getPageDimensions } from '@/features/UI';
import { ARTICLE_BIG_HEIGHT, ARTICLE_SMALL_HEIGHT, ARTICLE_SMALL_WIDTH } from '@/shared/const/dimensions';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlePage', async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const inited = getArticlesPageInited(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleType;
        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
        }  
        const view = localStorage.getItem(
            ARTICLES_VIEW_LOCALSTORAGE_KEY,
        ) as ArticleView;
        if (view) {
            dispatch(articlesPageActions.setView(view));
        }  
        const {height: pageHeight, width: pageWidth} = getPageDimensions(getState())
        let limit
        if (view === ArticleView.BIG ) {
            limit = Math.ceil(pageHeight/ARTICLE_BIG_HEIGHT)+2;
        } else {
            const pageSquare = pageHeight * pageWidth;
            const articleSquare = ARTICLE_SMALL_HEIGHT*ARTICLE_SMALL_WIDTH;
            limit = Math.max(Math.ceil(pageSquare/articleSquare)+6, 9)
        }

        dispatch(articlesPageActions.setLimit(limit));
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
