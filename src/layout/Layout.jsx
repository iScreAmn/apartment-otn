import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="page-wrapper">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
