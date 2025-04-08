import {
  Navigation,
  Home,
  Services,
  Tours,
  Order,
  Footer,
  Application,
  Gallery,
} from "./components/index";
import ScrollToTop from "react-scroll-to-top";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <>
      <LanguageProvider>
        <Navigation />
        <Home />
        <main>
          <Order />
          <Services />
          <Gallery />
          <Tours />
          <Application />
        </main>
        <Footer />
        <ScrollToTop className="scroll-to-top" smooth top={300} />
      </LanguageProvider>
    </>
  );
}

export default App;
