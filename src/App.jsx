import { Navigation, Home, Services, Tours, Order } from "./components/index";

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
    </>
  );
}

export default App;
