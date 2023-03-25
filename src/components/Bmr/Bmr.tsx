import Image from 'next/image';

import s from './Bmr.module.css';

const Bmr = () => (
  <section className={s.bmr}>
    <h2 className={s.title}>Kalkulator kalorii</h2>
    <span className={s.qrCode}>
      <Image src="/qrcode.png" width="140" height="140" alt="" />
    </span>
    <p className={s.text}>
      Kalkulator kalorii to narzędzie, które pomaga obliczyć ilość kalorii,
      jakie powinieneś spożywać w ciągu dnia, aby utrzymać lub zmniejszyć wagę.
      Uwzględnia on Twój wiek, płeć, wzrost, wagę, poziom aktywności fizycznej i
      inne czynniki, aby wyznaczyć Twoje dzienne zapotrzebowanie kaloryczne.
      <br />
      Nasz kalkulator kalorii jest szczególnie przydatny dla osób, które chcą
      zacząć kontrolować swoją dietę i kontrolować wagę.
      <br /> Jeśli chcesz zacząć dbać o swoją wagę i zdrowie, kalkulator kalorii
      NO LIMIT jest świetnym narzędziem, które pomoże Ci osiągnąć swoje cele.
    </p>
  </section>
);

export default Bmr;
