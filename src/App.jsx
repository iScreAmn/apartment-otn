import { Navigation, Home, Services, Tours } from "./components/index";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <main>
        <Services />
        <Tours />
      </main>
    </>
  );
}

export default App;
