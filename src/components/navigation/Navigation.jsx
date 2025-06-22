import { logo, logo2 } from "../../assets/images";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitcher from "../widgets/themeSwitcher/ThemeSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
  const { theme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const currentLogo = theme === "dark" ? logo2 : logo; // Determine the logo based on the theme

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#!">
              <img className="logo-img" src={currentLogo} alt="Logo" />
            </a>
          </div>
          <div className="nav__list">
            <ul>
              <li>
                <Link to="/">{t("navigation.home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("navigation.about")}</Link>
              </li>
              <li>
                <a href="#services">{t("navigation.services")}</a>
              </li>
              <li>
                <a href="#tours">{t("navigation.tours")}</a>
              </li>
              <li>
                <a href="#application">{t("navigation.contacts")}</a>
              </li>
            </ul>
          </div>
          <div className="nav__btns">
            <ThemeSwitcher />
            <button
              className="nav__language"
              onClick={() => changeLanguage(language === "ru" ? "en" : "ru")}
            >
              {t("navigation.languageSwitch")}
            </button>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
