import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        console.log('onToggleModal');

        setIsAuthModal((prev) => !prev);
    }, []);

    const onShowModal = useCallback(() => {
        console.log('onShowModal');

        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.left}>
                {/* <h1>Navbar</h1> */}
            </div>
            <div className={cls.right}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onShowModal}

                >
                    {t('login')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

            </div>
        </div>
    );
};
