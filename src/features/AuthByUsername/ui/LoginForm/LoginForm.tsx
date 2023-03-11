import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginPassword } from '../../model/selectors/getLoginIsPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginIsUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();
            const result = await dispatch(
                loginByUsername({ username, password }),
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        },
        [onSuccess, dispatch, password, username],
    );
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <form
                onSubmit={onLoginClick}
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('Authorization form')} />
                {error && (
                    <Text
                        text={t('Invalid username or password')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autoFocus
                    className={cls.input}
                    placeholder={t('Enter user name')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    type="submit"
                    disabled={isLoading}
                >
                    {t('sign-in')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
