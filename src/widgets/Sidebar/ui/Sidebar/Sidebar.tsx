import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import AboutIcon from '../../../../shared/assets/icons/about.svg';
import MainIcon from '../../../../shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                { collapsed ? '>' : '<' }
            </Button>

            <ul className={cls.list}>
                <li>

                    <AppLink
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.icon} />
                        <span>{t('about')}</span>
                    </AppLink>
                </li>
                <li>

                    <AppLink
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.icon} />
                        <span>{t('main')}</span>
                    </AppLink>
                </li>
            </ul>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
