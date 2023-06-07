import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
    theme?: ButtonTheme;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short, theme = ButtonTheme.CLEAR_INVERTED } = props;
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const url = new URL(`${document.location}`);

    const toggle = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('en');
        }
    };

    console.log(`dfgsdfgndfk  ${document.location}`);

    /* navigate((item.id)); */

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={theme}
            onClick={toggle}
        >
            {short ? t('Short translate') : t('Translate')}
        </Button>
    );
});
