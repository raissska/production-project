import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;

}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <h2>{t('login')}</h2>
            <Input placeholder={t('userName')} autofocus type="text" className={cls.input} />
            <Input placeholder={t('password')} type="text" className={cls.input} />
            <Button theme={ButtonTheme.BACKROUND_INVERTED} className={cls.loginBtn}>
                {t('login')}
            </Button>
        </div>
    );
};
