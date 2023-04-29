import {
    FC, Fragment, ReactElement, ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
   className?: string;
   items: DropdownItem[];
   trigger: ReactNode;
   direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className, items, trigger, direction = 'bottom',
    } = props;

    const optionsClasses = [
        cls[direction],
    ];
    const { t } = useTranslation();

    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [cls.active]: active })}
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
