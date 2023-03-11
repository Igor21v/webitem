import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { BrowserView, MobileView } from '@/shared/ui/DetectDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const [needModalClose, setNeedModalClose] = useState(false);
    const acceptHandle = useCallback(() => {
        setNeedModalClose(true);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setNeedModalClose(true);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const resetNeedModalClose = useCallback(() => {
        setNeedModalClose(false);
    }, []);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Your feedback')}
                value={feedback}
                onChange={setFeedback}
                data-testid="RatingCard.Input"
            />
        </>
    );

    return (
        <Card className={className} max data-testid="RatingCard">
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('Thanks for the rating') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    needModalClose={needModalClose}
                    resetNeedModalClose={resetNeedModalClose}
                >
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="32" justify="end">
                            <Button
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid="RatingCard.Close"
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                data-testid="RatingCard.Send"
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
