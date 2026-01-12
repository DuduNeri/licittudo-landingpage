import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Card } from '../components/Card/Card';
import { Main } from '../components/Main/Main';
import { Complement } from '../components/Main/complemento_main/Complement';
import { CardInfo } from '../components/Main/Card-info';
import { ComplementoCardInfo } from '../components/Main/complemento_card-info/Complemento-card-info';
import { Free } from '../components/Main/Free_card';
import { Info } from '../components/Infos/Info';
import { Client } from '../components/Clients/Client';
import { ClientCard } from '../components/Clients/Client-card';
import { Sale } from '../components/Sale/Sale';
import { Questions } from '../components/Questions/Questions';
import { Footer } from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Main />
      <Complement />
      <CardInfo />
      <ComplementoCardInfo />
      <Free />
      <Info />
      <Client />
      <ClientCard />
      <Sale />
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
