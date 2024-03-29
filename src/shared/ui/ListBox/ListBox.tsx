import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';

export interface ListBoxItem {
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

interface ListBoxProps {
   items?: ListBoxItem[];
   className?: string;
   value?: string;
   defaultValue?: string;
   onChange: (value: string) => void;
   readonly?: boolean;
   direction?: DropdownDirection;
   label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
    } = props;

    const optionsClasses = [
        cls[direction],
    ];

    return (
        <HStack gap="4">
            {label && <span className={cls.label}>{label}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.listBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button className={cls.trigger}>

                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>

                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled ?? false}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>

                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
