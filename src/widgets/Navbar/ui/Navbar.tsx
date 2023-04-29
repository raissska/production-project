import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme, TextSize } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.left}>
                    <Text
                        theme={TextTheme.INVERTED}
                        className={cls.appName}
                        title={t('TechBlog App')}
                    />
                    <AppLink
                        theme={AppLinkTheme.INVERTED}
                        to={RoutePath.article_create}
                        className={cls.createBtn}
                    >
                        {t('Create article')}

                    </AppLink>
                </div>
                <div className={cls.right}>
                    <Dropdown
                        items={[
                            {
                                content: t('profile'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Logout'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={40} src={authData.avatar} />}
                    />
                    {/* <Button
                        theme={ButtonTheme.BACKROUND_INVERTED}
                        className={cls.links}
                        onClick={onLogout}

                    >
                        {t('Logout')}
                    </Button> */}
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.left}>
                <Text className={cls.appName} title={t('TechBlog App')} />
            </div>
            <div className={cls.right}>
                <Button
                    theme={ButtonTheme.BACKROUND_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}

                >
                    {t('login')}
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}

            </div>
        </header>
    );
});
