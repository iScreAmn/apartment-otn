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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
