import { logo2 } from "../../assets/images";
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher'; // Import the switcher
import "./Navigation.css";


const navigation = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#!">
              <img src={logo2} alt="Main Image" />
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

export default navigation;
