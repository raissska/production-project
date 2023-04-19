import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
   error?: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className, comments, isLoading, error,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        <VStack justify="center" max gap="16" className={classNames('', {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </VStack>;
    }

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
                ))
                : <Text text={t('No comments')} />}
        </VStack>
    );
});
