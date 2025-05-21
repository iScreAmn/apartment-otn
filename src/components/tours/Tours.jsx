import { useState } from "react";
import "./Tours.css";
import { summerTours, winterTours } from "../../data/tours";
import { RemoveScroll } from "react-remove-scroll";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const Tours = () => {
  const [season, setSeason] = useState("summer");
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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="tours" id="tours">
      <div className="container">
        <motion.h2
          className="services-title"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("tabs.title")} <br />
          <span>{t("tabs.span")}</span>
        </motion.h2>
        <motion.div className="tours__wrapper">
          <div className="toggle__wrapper">
            <button
              className={`tour-tab-left ${season === "summer" ? "active" : ""}`}
              onClick={() => setSeason("summer")}
            >
              {t("tabs.summer")}
            </button>
            <button
              className={`tour-tab-right ${
                season === "winter" ? "active" : ""
              }`}
              onClick={() => setSeason("winter")}
            >
              {t("tabs.winter")}
            </button>
          </div>
          <motion.div
            className={`destinations__wrapper ${season}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {currentTours.map((tour, index) => (
              <motion.div
                className="tour"
                key={index}
                onClick={() => handleTourClick(tour)}
                variants={cardVariants}
              >
                <img
                  className="tour__img"
                  src={tour.img}
                  alt={t(tour.titleKey)}
                />
                <h3 className="tour__title">{t(tour.titleKey)}</h3>
                <p className="tour__subtitle">{t(tour.priceKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {isModalOpen && selectedTour && (
        <RemoveScroll>
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title">{t(selectedTour.titleKey)}</h2>
              <div className="modal__wrapper">
                <button className="modal-close" onClick={handleModalClose}>
                  ×
                </button>
                <img
                  className="tours-img"
                  src={selectedTour.img}
                  alt={t(selectedTour.titleKey)}
                />
                <div className="tours-content">
                  <p className="modal-text">{t(selectedTour.descriptionKey)}</p>
                  <p className="modal-price">{t(selectedTour.priceKey)}</p>
                  <button className="tours-btn">Заказать тур</button>
                </div>
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </section>
  );
};

export default Tours;
