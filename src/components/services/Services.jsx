import "./Services.css";
import { useState } from "react";
import { FaWifi, FaTv, FaPlane } from "react-icons/fa";
import { FaMountainSun, FaSquareParking } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { modalContent } from "../../data/services";
import { RemoveScroll } from "react-remove-scroll";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const handleModalOpen = (modalType) => {
    setSelectedModal(modalType);
    setIsModalOpen(true);
  };

  return (
    <section className="services" id="services">
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
            <button
              className="card__btn"
              onClick={() => handleModalOpen("transfer")}
            >
              подробнее
            </button>
          </div>
          <div className="card">
            <IoLocationOutline />
            <h2 className="card__title">Идеальная локация</h2>
            <p className="card_subtitle">
              Апартаменты расположены в самом центре старого города, все топовые
              локации рядом
            </p>
            <button
              className="card__btn"
              onClick={() => handleModalOpen("location")}
            >
              подробнее
            </button>
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

      
      {isModalOpen && (
        <RemoveScroll>
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              {/* {selectedModal === "transfer" && (
                  <FaPlane className="modal-icon" />
                )} */}
                <h2 className="modal-title">{modalContent[selectedModal]?.title}</h2>
                <p className="modal-text">{modalContent[selectedModal]?.text}</p>
                <img className="modal-img" src={modalContent[selectedModal].img} alt={modalContent[selectedModal].title}/>
                {selectedModal === "transfer" && (
                <ul className="modal-desc">
                  {modalContent[selectedModal].desc.map((item, index) => (
                    <li key={index} className="modal-desc-item">
                      <span className="modal-desc-icon">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              <button className="transfer-btn">Заказать трансфер</button>
              <div className="modal-icons">
                
                {selectedModal === "location" && (
                  <IoLocationOutline className="modal-icon" />
                )}
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </section>
  );
};

export default Services;
