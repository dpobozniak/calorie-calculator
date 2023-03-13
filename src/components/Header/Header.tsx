import Link from 'next/link';
import Logo from 'components/Logo/NoLimit';

import s from './Header.module.css';

type TProps = {
  title: string;
  slogan: string;
};

const Header = ({ title, slogan }: TProps) => (
  <header className={s.header}>
    <Link href="/" passHref>
      <a className={s.logo}>
        <Logo size={100} />
      </a>
    </Link>
    <h1 className={s.mainTitle}>{title}</h1>
    <p className={s.mainSlogan}>{slogan}</p>
  </header>
);

export default Header;
