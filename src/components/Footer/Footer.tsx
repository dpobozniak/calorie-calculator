import { FC } from 'react';
import Logo from 'components/Logo/NoLimit';

import s from './Footer.module.css';

const Footer: FC = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <Logo size={90} />
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>Lorem ipsum</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a href="#">Lorem ipsum dolor sit amet</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Cras eleifend, lacus quis</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Phasellus pretium, nisl vel varius</a>
          </li>
        </ul>
      </section>
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>Lorem ipsum</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a href="#">Lorem ipsum dolor sit amet ads</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Cras eleifend, lacus quis</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Phasellus pretium, nisl vel varius</a>
          </li>
        </ul>
      </section>
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>Lorem ipsum</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a href="#">Lorem ipsum dolor sit amet ads asd asdf a</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Cras eleifend, lacus quis</a>
          </li>
          <li className={s.linkSectionItem}>
            <a href="#">Phasellus pretium, nisl vel varius</a>
          </li>
        </ul>
      </section>
      <p>
        Nullam varius et lectus sed sagittis. Sed eu velit non turpis ultricies
        lacinia. Curabitur risus mauris, interdum ac lacinia eu, luctus eu
        lacus.
      </p>
    </div>
  </footer>
);

export default Footer;
