import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdite = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            {canEdit ? (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdite}
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <div className={cls.wrraperBtn}>
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancel}
                                >
                                    {t('Cancel')}
                                </Button>

                            </div>
                        )}
                </div>
            ) : null}

        </div>
    );
};
