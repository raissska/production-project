import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        console.log('onToggleModal');

        setIsAuthModal((prev) => !prev);
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
                    onClick={onToggleModal}

                >
                    {t('login')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {/* eslint-disable react/jsx-no-comment-textnodes */}
                    { /* eslint-disable max-len */}
                    {/* eslint-disable i18next/no-literal-string */}
                    <span>
                        Elit sint consequat ullamco elit fugiat enim non voluptate. Magna deserunt cupidatat nulla in nostrud ullamco ad anim labore adipisicing. Veniam velit sit magna tempor est consequat ea culpa enim cillum.
                    </span>
                </Modal>

            </div>
        </div>
    );
};
