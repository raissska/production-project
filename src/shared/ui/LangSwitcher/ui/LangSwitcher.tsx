import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.BACKROUND_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'shortlang' : 'language')}
        </Button>
    );
});
