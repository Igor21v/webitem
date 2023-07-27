import { ReactNode, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    needModalClose?: boolean;
    resetNeedModalClose?: () => void;
}

/**
 * Компонент модального окна
 *  isOpen - модальное окно открыто
 *  onClose - функция для закрытия
 *  needModalClose - флаг необходимости закрытия модального окна (при наличии кнопок в модалке)
 *  resetNeedModalClose - функция сброса флага необходимости закрытия модалки
 */

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        needModalClose,
        resetNeedModalClose,
    } = props;
    const { close, isClosing, isRendered } = useModal({
        animationDelay: 500,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isRendered,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (needModalClose && resetNeedModalClose) {
            resetNeedModalClose();
            close();
        }
    }, [close, needModalClose, resetNeedModalClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    'app_modal',
                ])}
            >
                <Overlay
                    onClick={close}
                    className={
                        isClosing || !isRendered ? cls.overlayTransp : ''
                    }
                />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
