import { logo, logo2 } from "../../assets/images";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitcher from "../widgets/themeSwitcher/ThemeSwitcher";
import { useLanguage } from "../../context/LanguageContext";
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
                <a href="#!">{t("navigation.home")}</a>
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
            <button
              className="nav__language"
              onClick={() => changeLanguage(language === "ru" ? "en" : "ru")}
            >
              {t("navigation.languageSwitch")}
            </button>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
