import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound: React.FC<NotFoundProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFound, {}, [className])}>
            {t('notFound')}
        </div>
    );
};
