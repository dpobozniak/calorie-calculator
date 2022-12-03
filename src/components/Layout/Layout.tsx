import Footer from 'components/Footer/Footer';
import s from './Layout.module.css';

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => (
  <div className={s.wrapper}>
    <div className={s.container}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
