import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
  className?: string;
  title?:string;
  text?:string;
  theme?: TextTheme;
  aling?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.PRIMARY, aling = TextAlign.LEFT, size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.text, {}, [className, cls[aling], cls[size], cls[theme]])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}

        </div>
    );
});
