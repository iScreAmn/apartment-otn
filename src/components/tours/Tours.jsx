import { useState } from "react";
import "./Tours.css";
import { summerTours, winterTours } from "../../data/tours";
import { RemoveScroll } from "react-remove-scroll";
import { useLanguage } from "../../context/LanguageContext";

const Tours = () => {
  const [season, setSeason] = useState("winter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const { t } = useLanguage();

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  const currentTours = season === "summer" ? summerTours : winterTours;

  return (
    <section className="tours" id="tours">
      <div className="container">
        <h2 className="services-title">
          {t("tours.title")} <br/>
          <span>{t("tours.span")}</span>
        </h2>
        <div className="tours__wrapper">
          <div className="toggle__wrapper">
            <button
              className={`tour-tab-left ${season === "summer" ? "active" : ""}`}
              onClick={() => setSeason("summer")}
            >
              {t("tours.summer")}
            </button>
            <button
              className={`tour-tab-right ${season === "winter" ? "active" : ""}`}
              onClick={() => setSeason("winter")}
            >
              {t("tours.winter")}
            </button>
          </div>
          <div className={`destinations__wrapper ${season}`}>
            {currentTours.map((tour, index) => (
              <div
                className="tour"
                key={index}
                onClick={() => handleTourClick(tour)}
              >
                <img
                  className="tour__img"
                  src={tour.img}
                  alt={tour.title}
                />
                <h3 className="tour__title">{tour.title}</h3>
                <p className="tour__subtitle">{tour.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedTour && (
        <RemoveScroll>
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleModalClose}>
                ×
              </button>
              <h2 className="modal-title">{selectedTour.title}</h2>
              <img
                className="modal-img"
                src={selectedTour.img}
                alt={selectedTour.title}
              />
              <p className="modal-text">{selectedTour.description}</p>
              <p className="modal-price">{selectedTour.price}</p>
              <button className="tours-btn">Заказать тур</button>
            </div>
          </div>
        </RemoveScroll>
      )}
    </section>
  );
};

export default Tours;
