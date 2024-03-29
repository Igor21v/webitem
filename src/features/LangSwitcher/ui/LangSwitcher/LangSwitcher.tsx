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
    const url = new URL(String(document.location));
    const navigate = useNavigate();
    const toggle = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
            const newPath = `en${url.pathname}`;
            url.pathname = newPath;
            navigate(url.pathname + url.search + url.hash);
        } else {
            i18n.changeLanguage('ru');
            const newPath = url.pathname.slice(3);
            url.pathname = newPath;
            navigate(url.pathname + url.search + url.hash);
        }
    };

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
