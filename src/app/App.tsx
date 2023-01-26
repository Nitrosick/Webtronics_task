import { FC } from 'react';
import { Poster } from '../components/Poster/Poster';
import { AboutUs } from '../sections/AboutUs/AboutUs';
import { ContactUs } from '../sections/ContactUs/ContactUs';
import { Footer } from '../sections/Footer/Footer';
import { Gallery } from '../sections/Gallery/Gallery';
import { Header } from '../sections/Header/Header';
import { Questions } from '../sections/Questions/Questions';
import { Review } from '../sections/Review/Review';
import { Steps } from '../sections/Steps/Steps';
import { Technologies } from '../sections/Technologies/Technologies';
import { Title } from '../sections/Title/Title';
import './App.css';

export const App: FC = () => {
  return (
    <div className="app">
      <Poster />
      <Header />

      <main>
        <Title />
        <AboutUs />
        <Technologies />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
