import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

const optionsList = [
    { value: Country.Israel, content: Country.Israel },
    { value: Country['United States'], content: Country['United States'] },
    { value: Country.China, content: Country.China },
];

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Country')}
            options={optionsList}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
