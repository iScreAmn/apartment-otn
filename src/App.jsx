import { Navigation, Home, Services, Tours, Order, Footer, Application, Gallery } from "./components/index";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <main>
        <Order />
        <Services />
        <Tours />
        <Application />
        <Gallery />
        {/* <Feedback/> */}
        {/* <Location /> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
