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

      <div className={s.calculatorContainer}>
        <Calculator />
      </div>

      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend,
        lacus quis maximus accumsan, eros metus varius metus, at elementum velit
        neque non turpis. Phasellus pretium, nisl vel varius sollicitudin, nulla
        nulla fermentum ex, at porttitor enim nunc et metus. Duis id tempor
        erat. Praesent euismod ut nibh in sollicitudin. Nullam ante massa,
        mattis eu eros sit amet, bibendum interdum massa. Cras tristique, arcu
        et posuere mollis, metus libero sodales eros, eget eleifend velit sapien
        a odio. Vestibulum id sodales ante, sit amet laoreet dui. Praesent id
        urna erat. Proin leo odio, condimentum ut dolor id, luctus tempor augue.
        Aenean turpis orci, laoreet non vehicula ac, suscipit nec arcu. Integer
        tristique magna sit amet turpis egestas, eu laoreet turpis vulputate.
        Nullam varius et lectus sed sagittis. Sed eu velit non turpis ultricies
        lacinia. Curabitur risus mauris, interdum ac lacinia eu, luctus eu
        lacus.
      </p>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend,
        lacus quis maximus accumsan, eros metus varius metus, at elementum velit
        neque non turpis. Phasellus pretium, nisl vel varius sollicitudin, nulla
        nulla fermentum ex, at porttitor enim nunc et metus. Duis id tempor
        erat. Praesent euismod ut nibh in sollicitudin. Nullam ante massa,
        mattis eu eros sit amet, bibendum interdum massa. Cras tristique, arcu
        et posuere mollis, metus libero sodales eros, eget eleifend velit sapien
        a odio. Vestibulum id sodales ante, sit amet laoreet dui. Praesent id
        urna erat. Proin leo odio, condimentum ut dolor id, luctus tempor augue.
        Aenean turpis orci, laoreet non vehicula ac, suscipit nec arcu. Integer
        tristique magna sit amet turpis egestas, eu laoreet turpis vulputate.
        Nullam varius et lectus sed sagittis. Sed eu velit non turpis ultricies
        lacinia. Curabitur risus mauris, interdum ac lacinia eu, luctus eu
        lacus.
      </p>
    </Layout>
  );
};

export default Home;
