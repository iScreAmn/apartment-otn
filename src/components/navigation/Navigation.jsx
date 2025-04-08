import { useTheme } from "../../context/ThemeContext";
import { logo, logo2 } from "../../assets/images"; // Import both logos
import ThemeSwitcher from '../widgets/themeSwitcher/ThemeSwitcher';
import "./Navigation.css";

const Navigation = () => {
  const { theme } = useTheme(); // Get the current theme from the context
  const currentLogo = theme === "dark" ? logo2 : logo; // Determine the logo based on the theme

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#!">
              <img className="logo-img" src={currentLogo} alt="Logo" /> {/* Use the dynamic logo */}
            </a>
          </div>
          <div className="nav__list">
            <ul>
              <li>
                <a href="#!">Главная</a>
              </li>
              <li>
                <a href="#services">Услуги</a>
              </li>
              <li>
                <a href="#tours">Туры</a>
              </li>
              <li>
                <a href="#!">Контакты</a>
              </li>
            </ul>
          </div>
          <ThemeSwitcher/>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
