import Image from 'next/image';
import Button from 'components/Button/Button';

import s from './Bonus.module.css';

const Bonus = () => (
  <section className={s.wrapper}>
    <h2 className={s.title}>Pakiet bonusów dla Ciebie</h2>
    <p>
      Oczywiście sama dieta to nie wszystko! Potrzebujesz jeszcze dopasowanego
      planu treningowego. Mamy na to rozwiązanie...
    </p>
    <h3 className={s.subtitle}>Trening dostępny od zaraz!</h3>
    <p>
      Ćwicz, kiedy chcesz i gdzie chcesz z aplikacjami treningowymi NO LIMIT®.
      Aplikacje umożliwiają dostęp do treningów przygotowanych specjalnie z
      myślą o osobach nie mających czasu na długie sesje treningowe. Czas na
      konkret!
    </p>
    <h4 className={s.subtitle1}>Żeby zacząć ćwiczyć potrzebujesz jedynie:</h4>
    <ul className={s.whatYouNeed}>
      <li>
        <a
          href="https://nolimitplan.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kilkanaście minut dziennie
        </a>
      </li>
      <li>
        <a
          href="https://nolimitplan.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kawałka podłogi
        </a>
      </li>
      <li>
        <a
          href="https://nolimitplan.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pozytywnego nastawienia
        </a>
      </li>
      <li>
        <a
          href="https://nolimitplan.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telefonu, na którym zainstalujesz apkę 😉
        </a>
      </li>
    </ul>
    <p>
      <strong>Skorzystaj z pakietów</strong> składających się z dostępów do
      aplikacji mobilnej <strong>NO LIMIT FIT</strong> lub{' '}
      <strong>NO LIMIT XL</strong>, oraz do platformy{' '}
      <strong>NO LIMIT DIETA</strong>, w której znajdziesz przepisy na pyszne
      dania (z podziałem na zapotrzebowanie kaloryczne).
    </p>
    <div className={s.banners}>
      <a
        className={s.bannerItem}
        href="https://nolimitplan.pl/product/pakiet-projekt-2023-no-limit-fit-dieta-pdf-pelny-dostep-na-kwartal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/nolimit_fit.jpg"
          height={400}
          width={400}
          layout="responsive"
          alt="NO LIMIT FIT + Dieta"
        />
      </a>
      <a
        className={s.bannerItem}
        href="https://nolimitplan.pl/product/pakiet-projekt-2023-no-limit-fit-dieta-pdf-pelny-dostep-na-kwartal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/nolimit_xl.jpg"
          height={400}
          width={400}
          layout="responsive"
          alt="NO LIMIT XL + Dieta"
        />
      </a>
    </div>
    <section>
      <h3 className={s.subtitle}>
        Zobacz metamorfozy dziewczyn,
        <br /> które ćwiczą z aplikacją NO LIMIT®
      </h3>
      <div className={s.banners}>
        {[...Array(8)].map((item, index) => (
          <a
            className={s.bannerItem}
            href="https://nolimitplan.pl"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Image
              src={`/metamorfoza_${index + 1}.jpg`}
              height={200}
              width={204}
              layout="responsive"
              alt={`Metamorfoza ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </section>
    <section>
      <p>
        To nie wszystko. Żeby ułatwić Ci start w dążeniu do wyznaczonych celów i
        upragnionej sylwetki oddajemy w Twoje ręce pakiet specjalnych e-booków.
      </p>
      <h3 className={s.subtitle}>
        Pobierze darmowe e-booki z serii NO LIMIT<small>®</small>
      </h3>
      <div className={s.banners}>
        <a
          className={s.bannerItem}
          href="https://nolimitplan.pl/product/e-book-no-limit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ebook_1.jpg"
            height={408}
            width={300}
            layout="responsive"
            alt="Jak trenować i jak jeść"
          />
        </a>
        <a
          className={s.bannerItem}
          href="https://nolimitplan.pl/product/ebook-projekt-2023-fit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ebook_2.jpg"
            height={408}
            width={300}
            layout="responsive"
            alt="Projekt 2023 NOT LIMIT FIT"
          />
        </a>
        <a
          className={s.bannerItem}
          href="https://nolimitplan.pl/product/ebook-projekt-2023-xl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ebook_3.jpg"
            height={408}
            width={300}
            layout="responsive"
            alt="Projekt 2023 NO LIMIT XL"
          />
        </a>
      </div>
    </section>
    <p>
      <b>
        Jeśli chcesz dowiedzieć się więcej to zapraszamy na oficjalną stronę NO
        LIMIT
      </b>
    </p>
    <div className={s.ctaWrapper}>
      <Button href="https://nolimitplan.pl" external color="#9902AB">
        NOLIMITPLAN.pl
      </Button>
    </div>
  </section>
);

export default Bonus;
