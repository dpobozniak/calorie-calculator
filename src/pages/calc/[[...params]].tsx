import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import { calorieFormula } from 'helpers';

import s from 'styles/Result.module.css';

const Result: NextPage = () => {
  const router = useRouter();
  const { activity, age, gender, height, weight } = router.query;
  let result = null;

  if (router.query.activity) {
    result = calorieFormula({
      activity: Number(activity),
      age: Number(age),
      gender: gender as string,
      height: Number(height),
      weight: Number(weight),
    });
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

      {/* {result && (
        <Script
          src="https://www.gstatic.com/charts/loader.js"
          onLoad={() => {
            google.charts.load('current', { packages: ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Białko', result?.protein.cal],
                ['Węglowodany', result?.carbo.cal],
                ['Tłuszcze', result?.fat.cal],
              ]);

              var options = {
                pieHole: 0.4,
              };

              var chart = new google.visualization.PieChart(
                document.getElementById('donutchart'),
              );
              chart.draw(data, options);
            }
          }}
        />
      )} */}

      <div className={s.resultContainer}>
        <b className={s.totalCalories}>
          {result?.totalCalories} <span>kcal</span>
        </b>
        <ul className={s.details}>
          <li className={s.detailsItem}>
            <b>15% białka:</b> {result?.protein.cal} kcal = {result?.protein.g}{' '}
            g
          </li>
          <li className={s.detailsItem}>
            <b>55% węglowodanów:</b> {result?.carbo.cal} kcal ={' '}
            {result?.carbo.g} g
          </li>
          <li className={s.detailsItem}>
            <b>30% tłuszczu:</b> {result?.fat.cal} kcal = {result?.fat.g} g
          </li>
        </ul>
        <div id="donutchart" className={s.chart}>
          <div>
            <div dir="ltr">
              <div aria-label="A chart.">
                <svg width="900" height="500" aria-label="A chart.">
                  <defs id="_ABSTRACT_RENDERER_ID_0"></defs>
                  <rect
                    x="0"
                    y="0"
                    width="900"
                    height="500"
                    stroke="none"
                    strokeWidth="0"
                    fill="#ffffff"
                  ></rect>
                  <g>
                    <rect
                      x="542"
                      y="96"
                      width="198"
                      height="60"
                      stroke="none"
                      strokeWidth="0"
                      fillOpacity="0"
                      fill="#ffffff"
                    ></rect>
                    <g column-id="Białko">
                      <rect
                        x="542"
                        y="96"
                        width="198"
                        height="14"
                        stroke="none"
                        strokeWidth="0"
                        fillOpacity="0"
                        fill="#ffffff"
                      ></rect>
                      <g>
                        <text
                          textAnchor="start"
                          x="561"
                          y="107.9"
                          fontFamily="Arial"
                          fontSize="14"
                          stroke="none"
                          strokeWidth="0"
                          fill="#222222"
                        >
                          Białko
                        </text>
                      </g>
                      <circle
                        cx="549"
                        cy="103"
                        r="7"
                        stroke="none"
                        strokeWidth="0"
                        fill="#3366cc"
                      ></circle>
                    </g>
                    <g column-id="Węglowodany">
                      <rect
                        x="542"
                        y="119"
                        width="198"
                        height="14"
                        stroke="none"
                        strokeWidth="0"
                        fillOpacity="0"
                        fill="#ffffff"
                      ></rect>
                      <g>
                        <text
                          textAnchor="start"
                          x="561"
                          y="130.9"
                          fontFamily="Arial"
                          fontSize="14"
                          stroke="none"
                          strokeWidth="0"
                          fill="#222222"
                        >
                          Węglowodany
                        </text>
                      </g>
                      <circle
                        cx="549"
                        cy="126"
                        r="7"
                        stroke="none"
                        strokeWidth="0"
                        fill="#dc3912"
                      ></circle>
                    </g>
                    <g column-id="Tłuszcze">
                      <rect
                        x="542"
                        y="142"
                        width="198"
                        height="14"
                        stroke="none"
                        strokeWidth="0"
                        fillOpacity="0"
                        fill="#ffffff"
                      ></rect>
                      <g>
                        <text
                          textAnchor="start"
                          x="561"
                          y="153.9"
                          fontFamily="Arial"
                          fontSize="14"
                          stroke="none"
                          strokeWidth="0"
                          fill="#222222"
                        >
                          Tłuszcze
                        </text>
                      </g>
                      <circle
                        cx="549"
                        cy="149"
                        r="7"
                        stroke="none"
                        strokeWidth="0"
                        fill="#ff9900"
                      ></circle>
                    </g>
                  </g>
                  <g>
                    <path
                      d="M340,189.4L340,97A154,154,0,0,1,464.7687920184283,160.72958104527163L389.90751680737134,214.89183241810866A61.6,61.6,0,0,0,340,189.4"
                      stroke="#ffffff"
                      strokeWidth="1"
                      fill="#3366cc"
                    ></path>
                    <text
                      textAnchor="start"
                      x="383.8103339090439"
                      y="142.71981883907975"
                      fontFamily="Arial"
                      fontSize="14"
                      stroke="none"
                      strokeWidth="0"
                      fill="#ffffff"
                    >
                      15%
                    </text>
                  </g>
                  <g>
                    <path
                      d="M281.43245483902285,270.08933350897564L193.5811370975571,298.7233337724391A154,154,0,0,1,340,97L340,189.4A61.6,61.6,0,0,0,281.43245483902285,270.08933350897564"
                      stroke="#ffffff"
                      strokeWidth="1"
                      fill="#ff9900"
                    ></path>
                    <text
                      textAnchor="start"
                      x="225.21565113182376"
                      y="182.74668905835009"
                      fontFamily="Arial"
                      fontSize="14"
                      stroke="none"
                      strokeWidth="0"
                      fill="#ffffff"
                    >
                      30%
                    </text>
                  </g>
                  <g>
                    <path
                      d="M389.90751680737134,214.89183241810866L464.7687920184283,160.72958104527163A154,154,0,1,1,193.5811370975571,298.7233337724391L281.43245483902285,270.08933350897564A61.6,61.6,0,1,0,389.90751680737134,214.89183241810866"
                      stroke="#ffffff"
                      strokeWidth="1"
                      fill="#dc3912"
                    ></path>
                    <text
                      textAnchor="start"
                      x="383.6426138737764"
                      y="369.18023893114355"
                      fontFamily="Arial"
                      fontSize="14"
                      stroke="none"
                      strokeWidth="0"
                      fill="#ffffff"
                    >
                      55%
                    </text>
                  </g>
                  <g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result;
