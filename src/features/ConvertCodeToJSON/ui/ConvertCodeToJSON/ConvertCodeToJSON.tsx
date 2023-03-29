import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ConvertCodeToJSON.module.scss';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { CodesContentType, languageType } from '@/shared/types/codes';

interface ConvertCodeToJSONProps {
    className?: string;
    codes: CodesContentType;
}

export const ConvertCodeToJSON = memo((props: ConvertCodeToJSONProps) => {
    const { className, codes } = props;
    const onCopy = useCallback(
        (lang: languageType) => () => {
            const codeStringify = JSON.stringify(codes[lang]);
            navigator.clipboard.writeText(codeStringify);
        },
        [codes],
    );
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ConvertCodeToJSON, {}, [className])}>
            <Text
                title="Конвертер кода в JSON"
                size={TextSize.L}
                align={TextAlign.CENTER}
            />
            <Text title="Код HTML" text={JSON.stringify(codes.html)} />
            <Button onClick={onCopy('html')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <hr />
            <Text title="Код CSS" text={JSON.stringify(codes.css)} />
            <Button onClick={onCopy('css')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
            <hr />
            <Text title="Код JS" text={JSON.stringify(codes.js)} />
            <Button onClick={onCopy('js')} theme={ButtonTheme.CLEAR}>
                <CopyIcon />
            </Button>
        </div>
    );
});
