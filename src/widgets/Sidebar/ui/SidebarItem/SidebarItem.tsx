import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
        <li className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}>
            <AppLink
                to={item.path}
            >
                <item.Icon className={cls.icon} />
                <span>{t(item.text)}</span>
            </AppLink>
        </li>
    );
});
