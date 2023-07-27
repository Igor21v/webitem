import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Select, SelectOption } from '@/shared/ui/Select';
import { EditorThemeType } from '../CodeEditor/CodeEditor';
import { CODE_EDITOR_THEME_KEY } from '@/shared/const/localstorage';
import { useResizeWindow } from '@/shared/lib/hooks/useResizeWindow/useResizeWindow';

interface ThemeSelectProps {
    className?: string;
    editorTheme: EditorThemeType;
    setEditorTheme: (theme: EditorThemeType) => void;
}

export const ThemeSelect = memo((props: ThemeSelectProps) => {
    const { className, editorTheme, setEditorTheme } = props;
    const { t } = useTranslation();
    const { isScreenSm } = useResizeWindow();
    const selectOptions: SelectOption<EditorThemeType>[] = [
        {
            value: 'none',
            content: t('default'),
        },
        {
            value: 'dark',
            content: t('dark'),
        },
        {
            value: 'light',
            content: t('light'),
        },
    ];
    const selectHandler = (value: EditorThemeType) => {
        setEditorTheme(value);
        localStorage.setItem(CODE_EDITOR_THEME_KEY, value);
    };
    return (
        <Select
            className={className}
            options={selectOptions}
            value={editorTheme}
            onChange={selectHandler}
            label={t('Editor_s theme')}
            column={!isScreenSm}
        />
    );
});
