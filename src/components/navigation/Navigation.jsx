import { logo } from "../../assets/images"
import "./Navigation.css"


const navigation = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#!">
              <img src={logo} alt="Main Image" />
            </a>
          </div>
          <div className="nav__list">
            <ul>
              <li><a href="#!">Главная</a></li>
              <li><a href="#!">Услуги</a></li>
              <li><a href="#!">Галерея</a></li>
              <li><a href="#!">Контакты</a></li>
            </ul>
          </div>
          <a className="nav__btn" href="#!">Забронировать</a>
          <button className="nav__toggle">
            <div className="menu-icon-wrapper">
              <div className="menu-icon"></div>
            </div>
          </button>
        </nav>
        
        <div className="home">
          <div className="container">
            
          </div>
        </div>
      </div>
  </header>
  
  )
}

export default navigation