import s from './Layout.module.css';

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => (
  <div className={s.container}>{children}</div>
);

export default Layout;
