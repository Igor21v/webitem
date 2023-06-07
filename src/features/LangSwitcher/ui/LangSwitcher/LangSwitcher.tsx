import { memo, useEffect } from 'react';
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

    const langPath = url.pathname.slice(1, 3);
    console.log(`Render lSwitcher ${i18n.language !== 'en'}`);

    useEffect(() => {
        if (langPath === 'en') {
            if (i18n.language !== 'en') {
                i18n.changeLanguage('en');
                console.log(`Render lSwitcher111 ${langPath}`);
            }
        } else if (i18n.language !== 'ru') {
            i18n.changeLanguage('ru');
        }
    }, [i18n, langPath]);

    const toggle = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
            const newPath = `en${url.pathname}`;
            url.pathname = newPath;
            /* document.location = url.href; */
            navigate(url.pathname + url.search + url.hash);
        } else {
            i18n.changeLanguage('ru');
            const newPath = url.pathname.slice(3);
            url.pathname = newPath;
            navigate(url.pathname + url.search + url.hash);
        }
    };

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
