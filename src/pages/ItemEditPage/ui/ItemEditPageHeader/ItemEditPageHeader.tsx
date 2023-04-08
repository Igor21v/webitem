import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ItemEditPageHeaderProps {
    className?: string;
}

export const ItemEditPageHeader = memo((props: ItemEditPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('itemEdit');
    const navigate = useNavigate();
    const onBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);
    return (
        <div className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBack}>
                {t('Back to the component')}
            </Button>
        </div>
    );
});
