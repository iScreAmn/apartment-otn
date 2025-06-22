import { useState } from "react";
import "./Tours.css";
import { summerTours, winterTours } from "../../data/tours";
import { RemoveScroll } from "react-remove-scroll";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Tours = () => {
  const [season, setSeason] = useState("summer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const { t } = useLanguage();

  const handleTourClick = (tour, index) => {
    setSelectedTour({ ...tour, index });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  const currentTours = season === "summer" ? summerTours.slice(0, 4) : winterTours.slice(0, 4);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  const cardHover = {
    scale: 1.0,
    y: -9,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
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
            className="destinations__wrapper-modern"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            key={season}
          >
            {/* Первый ряд */}
            <div className="destinations__row">
              {currentTours.slice(0, 2).map((tour, index) => (
                <motion.div
                  className="tour-card-modern"
                  key={`${season}-${index}`}
                  layoutId={`tour-card-${season}-${index}`}
                  onClick={() => handleTourClick(tour, index)}
                  variants={cardVariants}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    borderRadius: 20,
                    cursor: "pointer",
                    flex: index === 0 ? "1.3" : "1"
                  }}
                >
                                    <motion.div 
                    className="tour-card-image-container"
                    layoutId={`tour-image-${season}-${index}`}
                  >
                    <img
                      className="tour-card-image"
                      src={tour.img}
                      alt={t(tour.titleKey)}
                    />
                    <div className="tour-card-overlay" />
                    <div className="tour-card-text-overlay">
                      <h3 className="modal-tour-title">{t(tour.titleKey)}</h3>
                      <p className="modal-tour-price">{t(tour.priceKey)}</p>
                    </div>
                  </motion.div>
 
                  </motion.div>
              ))}
            </div>
            
            {/* Второй ряд */}
            <div className="destinations__row">
              {currentTours.slice(2, 4).map((tour, index) => (
                <motion.div
                  className="tour-card-modern"
                  key={`${season}-${index + 2}`}
                  layoutId={`tour-card-${season}-${index + 2}`}
                  onClick={() => handleTourClick(tour, index + 2)}
                  variants={cardVariants}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    borderRadius: 20,
                    cursor: "pointer",
                    flex: index === 0 ? "1" : "1.3"
                  }}
                >
                                     <motion.div 
                     className="tour-card-image-container"
                     layoutId={`tour-image-${season}-${index + 2}`}
                   >
                     <img
                       className="tour-card-image"
                       src={tour.img}
                       alt={t(tour.titleKey)}
                     />
                     <div className="tour-card-overlay" />
                     <div className="tour-card-text-overlay">
                       <h3 className="modal-tour-title">{t(tour.titleKey)}</h3>
                       <p className="modal-tour-price">{t(tour.priceKey)}</p>
                     </div>
                   </motion.div>
                   
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedTour && (
          <RemoveScroll>
            <motion.div 
              className="modal-overlay-modern" 
              onClick={handleModalClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="modal-content-modern" 
                layoutId={`tour-card-${season}-${selectedTour.index}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <button className="modal-close-modern" onClick={handleModalClose}>
                  ×
                </button>
                <motion.div 
                  className="modal-image-section"
                  layoutId={`tour-image-${season}-${selectedTour.index}`}
                >
                  <img
                    className="modal-tour-image"
                    src={selectedTour.img}
                    alt={t(selectedTour.titleKey)}
                  />
                </motion.div>
                <motion.div 
                  className="modal-content-section"
                  layoutId={`tour-content-${season}-${selectedTour.index}`}
                >
                  <h2 className="modal-tour-title">{t(selectedTour.titleKey)}</h2>
                  <p className="modal-tour-description">{t(selectedTour.descriptionKey)}</p>
                  <div className="modal-tour-price">{t(selectedTour.priceKey)}</div>
                  <button className="modal-tour-btn">Заказать тур</button>
                </motion.div>
              </motion.div>
            </motion.div>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Tours;
