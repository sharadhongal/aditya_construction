import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Services     from './components/Services';
import WhyUs        from './components/WhyUs';
import Projects     from './components/Projects';
import Testimonials from './components/Testimonials';
import CtaBanner    from './components/CtaBanner';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
