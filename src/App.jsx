import { Navigation, Home, Services, Tours, Order, Footer, Application } from "./components/index";

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
        {/* <Feedback/> */}
        {/* <Location /> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
