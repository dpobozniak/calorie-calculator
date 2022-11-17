import Image from 'next/image';

import s from './Header.module.css';

type TProps = {
  title: string;
  slogan: string;
};

const Header = ({ title, slogan }: TProps) => (
  <header className={s.header}>
    <span className={s.logo}>
      <Image src="/logo_nolimit.png" height={90} width={90} alt="No limit" />
    </span>
    <h1 className={s.mainTitle}>{title}</h1>
    <p className={s.mainSlogan}>{slogan}</p>
  </header>
);

export default Header;
