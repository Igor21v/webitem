import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../model/slice/ArticlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfineteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfineteListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return (
            <Text text={t('an error occurred while downloading articles ')} />
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
