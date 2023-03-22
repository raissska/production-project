import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
  className?: string;
  title?:string;
  text?:string;
  theme?: TextTheme;
  aling?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.PRIMARY, aling = TextAlign.LEFT, size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[aling], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}

        </div>
    );
});
