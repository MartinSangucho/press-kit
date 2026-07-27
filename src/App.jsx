import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Musica from "./components/Musica";
import Videos from "./components/Videos";
import Estadisticas from "./components/Estadisticas";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Musica />
      <Videos />
      <Estadisticas />
      <Galeria />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </>
  );
}
