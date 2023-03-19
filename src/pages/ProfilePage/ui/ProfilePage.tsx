import {
    fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly,
    getProfileValidateErrors,
    profileActions, ProfileCard, profileReducer, ValidateProfileError,
} from 'entities/Profile';
import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entities/Currency';

import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    // data for ProfileCard
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_DATA]: t('Incorrect data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.NO_DATA]: t('No data'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]} />
                ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}

                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
