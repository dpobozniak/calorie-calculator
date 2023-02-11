import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import type { TFormulaResult } from 'types/formulaResult';

import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import { calorieFormula } from 'helpers';
import {
  activityOptions,
  genderOptions,
  nutritionRatio,
  targetOptions,
} from 'components/CalculatorForm/config';

import s from 'styles/Result.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const handlePrint = () => {
  window.print();
};

const Result: NextPage = () => {
  const router = useRouter();
  const { activity, age, gender, height, target, weight } = router.query;
  let result: TFormulaResult | null = null;
  let chartData: ChartData<'doughnut'> | null = null;
  let chartOptions: ChartOptions | null = null;

  if (router.query.activity) {
    result = calorieFormula({
      activity: Number(activity),
      age: Number(age),
      gender: gender as string,
      height: Number(height),
      target: Number(target),
      weight: Number(weight),
    });
  }

  if (result !== null) {
    chartData = {
      labels: ['Białko', 'Węglowodany', 'Tluszcze'],
      datasets: [
        {
          data: [result.protein.g, result.carbo.g, result.fat.g],
          backgroundColor: ['#00a1ab', '#046b8d', '#01cdda'],
          borderWidth: 10,
          rotation: -30,
          hoverOffset: 4,
        },
      ],
    };

    chartOptions = {
      elements: {
        arc: {
          borderWidth: 15,
        },
      },

      plugins: {
        legend: {
          labels: {
            boxHeight: 30,
            borderRadius: 10,
            useBorderRadius: false,
            font: { size: 16 },
          },
          onClick: () => {},
        },

        tooltip: {
          displayColors: false,
          backgroundColor: '#0c3a6f',
          callbacks: {
            label: (item) => `${item.formattedValue} g`,
          },
        },
      },
    };
  }

  return (
    <Layout>
      <Head>
        <title>Kalkulator kalorii</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        title="Kalkulator kalorii"
        slogan="Twoje zapotrzebowanie kaloryczne wynosi:"
      />

      <div className={s.resultContainer}>
        <div>
          <b className={s.totalCalories}>
            {result?.totalCalories} <span>kcal</span>
          </b>
        </div>
        <ul className={s.details}>
          <li className={s.detailsItem}>
            <b>{nutritionRatio.protein * 100}% białka:</b> {result?.protein.cal}{' '}
            kcal = {result?.protein.g} g
          </li>
          <li className={s.detailsItem}>
            <b>{nutritionRatio.carbo * 100}% węglowodanów:</b>{' '}
            {result?.carbo.cal} kcal = {result?.carbo.g} g
          </li>
          <li className={s.detailsItem}>
            <b>{nutritionRatio.fat * 100}% tłuszczu:</b> {result?.fat.cal} kcal
            = {result?.fat.g} g
          </li>
        </ul>

        {chartData && chartOptions && (
          <div id="donutchart" className={s.chart}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        )}
      </div>
      <dl className={s.paramsList}>
        <dt className={s.paramLabel}>Płeć:</dt>
        <dd className={s.paramValue}>
          {genderOptions.find((item) => item.value === gender)?.label}
        </dd>
        <dt className={s.paramLabel}>Waga:</dt>
        <dd className={s.paramValue}>{weight} kg</dd>
        <dt className={s.paramLabel}>Wzrost:</dt>
        <dd className={s.paramValue}>{height} cm</dd>
        <dt className={s.paramLabel}>Wiek:</dt>
        <dd className={s.paramValue}>{age} lat</dd>
        <dt className={s.paramLabel}>Aktywność:</dt>
        <dd className={s.paramValue}>
          {activityOptions.find((item) => item.value === activity)?.label}
        </dd>
        <dt className={s.paramLabel}>Cel:</dt>
        <dd className={s.paramValue}>
          {targetOptions.find((item) => item.value === target)?.label}
        </dd>
      </dl>
      <div className={s.actionButtons}>
        <button
          type="button"
          className={`${s.actionButton} ${s.buttonPrimary}`}
          onClick={handlePrint}
        >
          Drukuj
        </button>
        <Link href="/">
          <a className={`${s.actionButton} ${s.buttonSecondary}`}>Ponów</a>
        </Link>
      </div>
      <p className={s.disclaimer}>
        Są to orientacyjne wyliczenia, które mogą różnić się u poszczególnych
        osób ze względu na indywidualne cechy i parametry dodatkowe.
      </p>

      <h2>Lorem ipsum</h2>
      <span className={s.qrCode}>
        <Image src="/qrcode.jpg" width="140" height="140" alt="" />
      </span>
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
      </p>
    </Layout>
  );
};

export default Result;
