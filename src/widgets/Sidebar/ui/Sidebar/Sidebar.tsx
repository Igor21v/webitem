import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { SidibarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { itemList } from '@/entities/Item';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { i18n } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemListSorted = itemList;
    if (i18n.language === 'ru') {
        itemList.sort((a, b) => a.positionRu - b.positionRu);
    } else {
        itemList.sort((a, b) => (a.type > b.type ? 1 : -1));
    }
    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
                'scroll-thin',
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack justify="between" className={cls.content}>
                <VStack role="navigation" gap="8" className={cls.items}>
                    {itemListSorted.map((item) => (
                        <SidibarItem
                            item={item}
                            collapsed={collapsed}
                            key={item.type}
                            ImgOffsetX={item.ImgOffsetX}
                            ImgOffsetY={item.ImgOffsetY}
                        />
                    ))}
                </VStack>

                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.lang} short={collapsed} />
                </div>
            </VStack>
        </section>
    );
});
