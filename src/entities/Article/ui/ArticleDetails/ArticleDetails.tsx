import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/ElementConst';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppImage } from '@/shared/ui/AppImage';
import ArticleIcon from '@/shared/assets/icons/article.svg';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const reducers = {
        articleDetails: articleDetailsReducer,
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            default:
                return null;
        }
    }, []);
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.articleImage}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while downloading')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <AppImage
                        height={200}
                        width={200}
                        round
                        src={article?.img}
                        className={cls.articleImage}
                        fallback={
                            <Skeleton
                                className={cls.articleImage}
                                width={200}
                                height={200}
                                border="50%"
                            />
                        }
                        errorFallback={
                            <Icon
                                Svg={ArticleIcon}
                                width={200}
                                height={200}
                                opacity={0.7}
                            />
                        }
                    />
                </HStack>
                <VStack gap="4" data-testid="ArticleDetails.Info">
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
