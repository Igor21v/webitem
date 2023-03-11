import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { VStack } from '@/shared/ui/Stack';
import { getItemCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByItemId } from '../../model/services/fetchCommentsByItemId/fetchCommentsByItemId';
import { addCommentForItem } from '../../model/services/addCommentForItem/addCommentForItem';
import { getItemComments } from '../../model/slices/itemDetailsCommentsSlice';
import cls from './ItemDetailsComments.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ItemDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ItemDetailsComments = memo((props: ItemDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('itemDetails');
    const dispatch = useAppDispatch();
    const comments = useSelector(getItemComments.selectAll);
    const commentsIsLoading = useSelector(getItemCommentsIsLoading);
    useInitialEffect(() => {
        dispatch(fetchCommentsByItemId(id));
    });
    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForItem(text));
        },
        [dispatch],
    );
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Comments')}
                className={cls.commentTitle}
            />
            <Suspense fallback={<div>....</div>}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </VStack>
    );
});
