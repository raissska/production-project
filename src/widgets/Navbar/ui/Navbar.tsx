import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss'
import { useTranslation } from "react-i18next"
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.left}>
        {/* <h1>Navbar</h1> */}
      </div>
      <div className={cls.right}>
        <input type="checkbox" className={`${cls.checkbox} ${cls.check}`} id="check" />
        <label htmlFor="check" className={cls.checkBtn}>
          <i className="fa fa-bars">Nav</i>
        </label>
        <ul className={cls.list}>
          <li><AppLink to={'/about'}>{t('about')}</AppLink></li>
          <li><AppLink to={'/'}> {t('main')}</AppLink></li>
        </ul>
      </div>
    </div>
  );
};
