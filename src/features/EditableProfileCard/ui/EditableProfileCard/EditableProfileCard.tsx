import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from '@/entities/Profile';
import { VStack } from '@/shared/ui/Stack';
import { ValidateProfileError } from '../../model/consts/consts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import {
    profileReducer,
    useProfileActions,
} from '../../model/slice/profileSlice';
import { useProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { updateProfile } = useProfileActions();
    const formData = useProfileForm();
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const reducers: ReducersList = {
        profile: profileReducer,
    };
    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Name and lastname is required',
        ),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    };
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            updateProfile({ first: value });
        },
        [updateProfile],
    );
    const onChangeLastname = useCallback(
        (value?: string) => {
            updateProfile({ lastname: value });
        },
        [updateProfile],
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            if (/(^-?\d+$)|(^$)/.test(value || '')) {
                updateProfile({ age: Number(value || '') });
            }
        },
        [updateProfile],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            updateProfile({ city: value });
        },
        [updateProfile],
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            updateProfile({ username: value });
        },
        [updateProfile],
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            updateProfile({ avatar: value });
        },
        [updateProfile],
    );
    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            updateProfile({ currency });
        },
        [updateProfile],
    );
    const onChangeCountry = useCallback(
        (country?: Country) => {
            updateProfile({ country });
        },
        [updateProfile],
    );
    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((err: ValidateProfileError) => (
                        <Text
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                            key={err}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
