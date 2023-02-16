import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationList.module.scss';
import { ARTICLE_SMALL_WIDTH } from '@/shared/const/dimensions';

interface ArticleRecommendationListProps {
    className?: string;
    pageWidth: number;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className, pageWidth } = props;
        const { t } = useTranslation('articleDetails');
        const limit = Math.round(pageWidth / ARTICLE_SMALL_WIDTH);
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(limit);
        if (isLoading || error || !articles) {
            return null;
        }
        return (
            <VStack
                gap="8"
                className={classNames(cls.ArticleRecommendationList, {}, [
                    className,
                ])}
                data-testid="ArticleRecommendationList"
            >
                <Text size={TextSize.L} title={t('We recommend')} />
                <ArticleList
                    articles={articles}
                    target="_blank"
                    className={cls.articleList}
                />
            </VStack>
        );
    },
);
