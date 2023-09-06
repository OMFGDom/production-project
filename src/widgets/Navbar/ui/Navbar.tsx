import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to="/" className={cls.mainLink}>Главная</AppLink>
      <AppLink to="/about">О нас</AppLink>
    </div>

  </div>
);
