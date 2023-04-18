import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

const optionsList = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.NIS, content: Currency.NIS },
    { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Currency')}
            options={optionsList}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
