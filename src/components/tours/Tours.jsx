import { useState } from "react";
import "./Tours.css";
import { summerTours, winterTours } from "../../data/tours";
import { RemoveScroll } from "react-remove-scroll";

const Tours = () => {
  const [season, setSeason] = useState("winter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

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
          Чем заняться в Грузии <br />
          <span>в любой сезон:</span>
        </h2>
        <div className="tours__wrapper">
          <div className="toggle__wrapper">
            <button
              className={`tour-tab-left ${season === "summer" ? "active" : ""}`}
              onClick={() => setSeason("summer")}
            >
              Летний досуг
            </button>
            <button
              className={`tour-tab-right ${season === "winter" ? "active" : ""}`}
              onClick={() => setSeason("winter")}
            >
              Зимний досуг
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
            </div>
          </div>
        </RemoveScroll>
      )}
    </section>
  );
};

export default Tours;
