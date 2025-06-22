import {
  Home,
  Services,
  Tours,
  Order,
  Application,
  Gallery,
  Feedback,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutPage from "./pages/about/AboutPage";
import IconButtons from "./context/IconButtons";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";



function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter basename="/apartment-otn">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={
                <>
                  <Home />
                  <Order />
                  <Services />
                  <Gallery />
                  <Tours />
                  <Feedback />
                  <Application />
                </>
              } />
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Routes>
          <IconButtons />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;