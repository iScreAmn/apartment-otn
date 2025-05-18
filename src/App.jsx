import {
  Navigation,
  Home,
  Services,
  Tours,
  Order,
  Footer,
  Application,
  Gallery,
  Feedback,
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
            <Feedback />
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
