import { Navigation, Home, Services, Tours, Order, Feedback, Location, Footer } from "./components/index";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <main>
        <Order />
        <Services />
        <Tours />
        <Feedback/>
        <Location />
      </main>
      <Footer/>
    </>
  );
}

export default App;
