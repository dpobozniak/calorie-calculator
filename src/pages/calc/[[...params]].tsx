import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import type { TFormulaResult } from 'types/formulaResult';

import Bmr from 'components/Bmr/Bmr';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import { calorieFormula } from 'helpers';
import {
  activityOptions,
  genderOptions,
  nutritionRatio,
  targetOptions,
} from 'components/CalculatorForm/config';
import type { TFormElements } from 'components/CalculatorForm/types';

import s from 'styles/Result.module.css';
import Bonus from 'components/Bonus/Bonus';
import Button from 'components/Button/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

const handlePrint = () => {
  window.print();
};

const Result: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ result, params }) => {
  let chartData: ChartData<'doughnut'> = {
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

  let chartOptions: ChartOptions = {
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
          {genderOptions.find((item) => item.value === params.gender)?.label}
        </dd>
        <dt className={s.paramLabel}>Waga:</dt>
        <dd className={s.paramValue}>{params.weight} kg</dd>
        <dt className={s.paramLabel}>Wzrost:</dt>
        <dd className={s.paramValue}>{params.height} cm</dd>
        <dt className={s.paramLabel}>Wiek:</dt>
        <dd className={s.paramValue}>{params.age} lat</dd>
        <dt className={s.paramLabel}>Aktywność:</dt>
        <dd className={s.paramValue}>
          {
            activityOptions.find((item) => item.value === params.activity)
              ?.label
          }
        </dd>
        <dt className={s.paramLabel}>Cel:</dt>
        <dd className={s.paramValue}>
          {targetOptions.find((item) => item.value === params.target)?.label}
        </dd>
      </dl>
      <div className={s.actionButtons}>
        <Button color="#046b8d" onClick={handlePrint}>
          Drukuj
        </Button>
        <Button href="/" color="#dd7016">
          Ponów
        </Button>
      </div>
      <p className={s.disclaimer}>
        Podane wyniki to orientacyjne wyliczenia, które mogą różnić się u
        poszczególnych osób ze względu na indywidualne cechy i parametry
        dodatkowe.
      </p>

      <Bmr />

      <p>
        Przepisy na smaczne posiłki (śniadania, obiady, kolacje, przekąski) z
        podziałem na różne zapotrzebowanie kaloryczne znajdziesz na platformie
        NO LIMIT DIETA
      </p>

      {/* <Button external href="https://nolimitdieta.pl" color="#0C642D">
        Przejdź na platformę NO LIMIT DIETA
      </Button> */}

      <Bonus />
    </Layout>
  );
};

type TProps = {
  result: TFormulaResult;
  params: TFormElements;
};

export const getServerSideProps: GetServerSideProps<TProps> = async ({
  query,
}) => {
  const { activity, age, gender, height, target, weight } = query;

  const result = calorieFormula({
    activity: Number(activity),
    age: Number(age),
    gender: gender as string,
    height: Number(height),
    target: Number(target),
    weight: Number(weight),
  });

  if (!result) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      result,
      params: {
        activity: activity as string,
        age: age as string,
        gender: gender as string,
        height: height as string,
        target: target as string,
        weight: weight as string,
      },
    },
  };
};

export default Result;
