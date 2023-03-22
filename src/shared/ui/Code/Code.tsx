import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcone from '../../assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
   className?: string;
   text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcone className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
};
