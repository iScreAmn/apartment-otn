import "./Services.css";
import { FaWifi, FaTv, FaPlane } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaSquareParking } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">
          В нашем доме <span>есть:</span>
        </h2>
        <div className="services__wrapper">
          <div className="card">
            <FaWifi />
            <h2 className="card__title">Быстрый Интернет</h2>
            <p className="card_subtitle">
              На территории каждого дома, есть интернет и быстрый доступ к WiFi
              с различными настройками
            </p>
          </div>
          <div className="card">
            <FaTv />
            <h2 className="card__title">HD Телевиденье</h2>
            <p className="card_subtitle">
              На территории каждого дома, есть HD телевизор и доступ к фильмам с
              различными языками
            </p>
          </div>
          <div className="card">
            <FaPlane />
            <h2 className="card__title">Трансфер с аэропорта</h2>
            <p className="card_subtitle">
              Мы можем организовать трансфер с любого аэропорта страны в удобное
              для вас время
            </p>
            <button className="card__btn">подроднее</button>
          </div>
          <div className="card">
            <IoLocationOutline />
            <h2 className="card__title">Идеальная локация</h2>
            <p className="card_subtitle">
              Апартаменты расположены в самом центре старого города, все топовые
              локации рядом
            </p>
            <button className="card__btn">подроднее</button>
          </div>
          <div className="card">
            <FaSquareParking />
            <h2 className="card__title">Паркинг</h2>
            <p className="card_subtitle">
              На территории дома, есть паркинг и быстрый доступ к машине
            </p>
          </div>
          <div className="card">
            <FaMountainSun />
            <h2 className="card__title">Туры</h2>
            <p className="card_subtitle">
              Мы можем предложить вам интересные туры на время вашего проживания
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
