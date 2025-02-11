import { Navigation, Home, Services, Tours, Order, Footer } from "./components/index";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <main>
        <Order />
        <Services />
        <Tours />
      </main>
      <Footer/>
    </>
  );
}

export default App;
