import type { NextPage } from 'next';
import Head from 'next/head';

import ContactForm from 'components/Calculator/Form';

import s from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Kalkulator kalorii</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Kalkulator kalorii</h2>
      <p>Sprawdź swoje zapotrzebowanie kaloryczne (BMR)</p>
      <ContactForm />
    </div>
  );
};

export default Home;
