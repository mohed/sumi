import Navbar from '../components/navbar';
import Hero from '../components/hero';
import OpeningHours from '../components/opening-hours';
import Menu from '../components/menu';
import SushiMosaic from '../components/sushi-mosaic';
import ReserveCta from '../components/reserve-cta';
import About from '../components/about';
import Footer from '../components/menu-footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OpeningHours />
        <Menu />
        <SushiMosaic />
        <ReserveCta />
        <About />
      </main>
      <Footer />
    </>
  );
}
