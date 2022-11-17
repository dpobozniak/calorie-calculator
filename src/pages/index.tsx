import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

      <Calculator />
    </Layout>
  );
};

export default Home;
