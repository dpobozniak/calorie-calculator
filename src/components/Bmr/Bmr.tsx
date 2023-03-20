import Image from 'next/image';

import s from './Bmr.module.css';

const Bmr = () => (
  <section className={s.bmr}>
    <h2 className={s.title}>BMR (Basal Metabolic Rate)</h2>
    <span className={s.qrCode}>
      <Image src="/qrcode.png" width="140" height="140" alt="" />
    </span>
    <p className={s.text}>
      Dzięki kalkulatorowi przemiany materii{' '}
      <strong>BMR (Basal Metabolic Rate)</strong> wstępnie oszacujesz jaka ilość
      kalorii jest potrzebna Twojemu organizmowi w uzyskaniu konkretnych celów.
      W zależności od tego czy np. chcesz się odchudzać, czy budować masę
      mięśniową, kalkulator wyliczy zapotrzebowanie kaloryczne, które możesz
      sobie zapisać, lub wydrukować, by dobrać odpowiednią dietę i jeszcze
      skuteczniej dążyć do wyznaczonego celu. Dodatkowo uzyskasz wstępne
      szacunki zapotrzebowania na białko, węglowodany oraz tłuszcze.
      <br />
      <strong>
        Oblicz zapotrzebowanie kaloryczne odpowiednie dla Ciebie i zacznij
        działać!
      </strong>
    </p>
  </section>
);

export default Bmr;
