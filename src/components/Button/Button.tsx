import Link from 'next/link';

import s from './Button.module.css';

type TProps = {
  children: React.ReactNode;
  color?: string;
  external?: boolean;
  href?: string;
  onClick?: () => void;
};

const Button = ({ children, color, external, href, onClick }: TProps) => {
  const style = color ? { backgroundColor: color } : undefined;

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={s.button}
        style={style}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <a className={s.button} style={style}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button type="button" className={s.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
