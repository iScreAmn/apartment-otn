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
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import IconButtons from "./context/IconButtons";

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
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
          <IconButtons />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
