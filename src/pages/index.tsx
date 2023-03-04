import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Bmr from 'components/Bmr/Bmr';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Calculator from 'components/Calculator/Calculator';

import s from 'styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Kalkulator kalorii</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title="Kalkulator kalorii"
        slogan="Sprawdź swoje zapotrzebowanie kaloryczne"
      />

      <div className={s.calculatorContainer}>
        <Calculator />
      </div>

      <Bmr />

      <section className={s.info}>
        <h3 className={s.title}>Pamiętaj!</h3>
        <p>
          Prezentowane wyliczenia w kalkulatorze kalorii mają charakter
          orientacyjny, a sama dieta to oczywiście nie wszystko! Potrzebujesz
          jeszcze dopasowanego planu treningowego.{' '}
          <strong>
            Oblicz swoje zapotrzebowanie, a na stronie wyników otrzymasz
            dodatkowe Bonusy.
          </strong>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
