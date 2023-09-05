import { FC } from 'react';
import Logo from 'components/Logo/NoLimit';

import s from './Footer.module.css';

const Footer: FC = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <Logo size={90} />
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>Not Limit Fit</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a
              href="https://play.google.com/store/apps/details?id=com.fitgenerator.nolimit&hl=pl&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wersja Android
            </a>
          </li>
          <li className={s.linkSectionItem}>
            <a
              href="https://apps.apple.com/pl/app/no-limit-2-0/id1494527020?fbclid=IwAR1YJjB2Mnpdew288yDrHOqXNE12Z4Rc9AKj7XXv6Z1vg3paDdYfxlw6bjw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wersja iOS
            </a>
          </li>
          <li className={s.linkSectionItem}>
            <a
              href="https://nolimitplan.pl/aktywacja-kodu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aktywacja kodu FIT
            </a>
          </li>
        </ul>
      </section>
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>No Limit XL</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a
              href="https://play.google.com/store/apps/details?id=com.fitgenerator.nolimitxl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wersja Android
            </a>
          </li>
          <li className={s.linkSectionItem}>
            <a
              href="https://apps.apple.com/pl/app/no-limit-fit-xl/id1599149918"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wersja iOS
            </a>
          </li>
          <li className={s.linkSectionItem}>
            <a
              href="https://nolimitplan.pl/xl-aktywacja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aktywacja kodu XL
            </a>
          </li>
        </ul>
      </section>
      <section className={s.linkSection}>
        <h3 className={s.linkSectionTitle}>No Limit Dieta</h3>
        <ul className={s.linkSectionList}>
          <li className={s.linkSectionItem}>
            <a
              href="https://nolimitdieta.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link do platformy z przepisami
            </a>
          </li>
          <li className={s.linkSectionItem}>
            <a
              href="https://nolimitdieta.pl/logowanie-z-kodem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aktywacja kodu DIETA
            </a>
          </li>
        </ul>
      </section>
      <div className={s.socials}>
        <a
          href="https://www.instagram.com/no_limit_klaudia"
          target="_blank"
          rel="noopener noreferrer"
          className={s.social}
        >
          <svg
            role="img"
            viewBox="0 0 128 128"
            width="25"
            height="25"
            fill="#fff"
          >
            <title>Instagram</title>
            <path d="M83 23a22 22 0 0 1 22 22v38a22 22 0 0 1-22 22H45a22 22 0 0 1-22-22V45a22 22 0 0 1 22-22h38m0-8H45a30.09 30.09 0 0 0-30 30v38a30.09 30.09 0 0 0 30 30h38a30.09 30.09 0 0 0 30-30V45a30.09 30.09 0 0 0-30-30Z" />
            <path d="M90.14 32a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 90.14 32ZM64.27 46.47A17.68 17.68 0 1 1 46.6 64.14a17.7 17.7 0 0 1 17.67-17.67m0-8A25.68 25.68 0 1 0 90 64.14a25.68 25.68 0 0 0-25.73-25.67Z" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@NOLIMITPLUS"
          target="_blank"
          rel="noopener noreferrer"
          className={s.social}
        >
          <svg
            role="img"
            fill="#fff"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <title>Youtube</title>
            <path d="M501.303 132.765c-5.887-22.03-23.235-39.377-45.265-45.265C416.106 76.8 256 76.8 256 76.8s-160.107 0-200.039 10.7c-22.026 5.888-39.377 23.235-45.264 45.265C0 172.693 0 256.003 0 256.003s0 83.308 10.697 123.232c5.887 22.03 23.238 39.382 45.264 45.269C95.893 435.2 256 435.2 256 435.2s160.106 0 200.038-10.696c22.03-5.887 39.378-23.239 45.265-45.269 10.696-39.924 10.696-123.232 10.696-123.232s0-83.31-10.696-123.238ZM204.797 332.804V179.201l133.019 76.802-133.019 76.801Z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/groups/161946601188559/?hoisted_section_header_type=recently_seen&multi_permalinks=1162777434438799"
          target="_blank"
          rel="noopener noreferrer"
          className={s.social}
        >
          <svg
            role="img"
            viewBox="0 0 56.693 56.693"
            width="25"
            height="25"
            fill="#fff"
          >
            <title>Facebook</title>
            <path d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z" />
          </svg>
        </a>
      </div>
      <p>
        NO LIMIT® by FITGENERATOR® 2017-2023 | Nazwy NO LIMIT, FITGENERATOR, są
        chronionymi znakami towarowymi. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
);

export default Footer;
