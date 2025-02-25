import { useState, useEffect } from "react";
import "./Home.css";
import { FaVideo } from "react-icons/fa";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "motion/react";
import { FaCalendarAlt } from "react-icons/fa";
import { slideInVariants } from "../../../utils/animation";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShownTime = localStorage.getItem("lastShownTime");
    const currentTime = new Date().getTime();

    if (!lastShownTime || currentTime - lastShownTime > 15000) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("lastShownTime", currentTime.toString());
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const videoId = "riZAVELEHpk"; // Замените на нужный YouTube ID
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleCheckAvailability = () => {
    // Логика для проверки наличия
    console.log("Check-In:", checkIn);
    console.log("Check-Out:", checkOut);
    console.log("Guests:", guests);
    alert("Проверка наличия...");
  };

  return (
    <>
      <div className="home__wrapper">
        <div className="home__action">
          <h3 className="minutes">8 минут от Площади Свободы</h3>
          <h2 className="home__name">
            Old Tbilisi <span>Narikala</span>
          </h2>
          <div className="home__btns">
            <a
              href="#!"
              className="home__btn"
              onClick={() => setIsModalOpen(true)}
            >
              Забронировать
            </a>
            <button
              className="home__video-btn"
              onClick={() => setIsVideoOpen(true)}
            >
              Смотреть дом
              <FaVideo />
            </button>
          </div>
        </div>
        <div className="home__description">
          <p>
            Аренда уютных апартаментов в самом сердце старого Тбилиси, прямо под
            крепостью Нарикала. Тебе у нас точно понравится
          </p>
        </div>
      </div>
      <div className="home__img">
        <a href="#!" className="home__link">
          Лучшие апартаменты <span>в историческом районе города</span>
        </a>
      </div>

      {/* Модальное окно с видео */}
      {isVideoOpen && (
        <RemoveScroll>
          <div
            className="home-modal-overlay"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="home-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="home-modal-close"
                onClick={() => setIsVideoOpen(false)}
              >
                ×
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </RemoveScroll>
      )}

      {/* Модальное окно с бронью */}
      {isModalOpen && (
        <RemoveScroll>
          <div
            className="home-modal-overlay"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="home-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="home-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              <section className="booking-section" id="booking">
                <h2 className="services-title">
                  Забронируй <span>Онлайн</span>
                </h2>
                <div className="booking-form">
                  <div className="form-group">
                    <label htmlFor="check-in">Заезд:</label>
                    <motion.div
                      className="input-with-icon"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      custom={1}
                      variants={slideInVariants("top", 0.7, 50, true)}
                    >
                      <input
                        type="date"
                        id="check-in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                      <FaCalendarAlt className="calendar-icon" />
                    </motion.div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="check-out">Выезд:</label>
                    <motion.div
                      className="input-with-icon"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      custom={2}
                      variants={slideInVariants("top", 0.7, 50, true)}
                    >
                      <input
                        type="date"
                        id="check-out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                      <FaCalendarAlt className="calendar-icon" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="form-group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={3}
                    variants={slideInVariants("top", 0.7, 50, true)}
                  >
                    <label htmlFor="guests">Гости:</label>
                    <input
                      type="number"
                      id="guests"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    />
                  </motion.div>
                  <motion.div
                    className="order__wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={4}
                    variants={slideInVariants("top", 0.7, 50, true)}
                  >
                    <button
                      className="order__btn"
                      onClick={handleCheckAvailability}
                    >
                      Показать наличие
                    </button>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </RemoveScroll>
      )}

      {/* Всплывающее окно с бронью */}
      {isOpen && (
        <RemoveScroll>
          <div className="home-modal-overlay" onClick={() => setIsOpen(false)}>
            <div
              className="home-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="home-modal-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
              <section className="booking-section" id="booking">
                <h2 className="services-title">
                  Забронируй <span>Онлайн</span>
                </h2>
                <div className="booking-form">
                  <div className="form-group">
                    <label htmlFor="check-in">Заезд:</label>
                    <motion.div
                      className="input-with-icon"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      custom={1}
                      variants={slideInVariants("top", 0.7, 50, true)}
                    >
                      <input
                        type="date"
                        id="check-in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                      <FaCalendarAlt className="calendar-icon" />
                    </motion.div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="check-out">Выезд:</label>
                    <motion.div
                      className="input-with-icon"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      custom={2}
                      variants={slideInVariants("top", 0.7, 50, true)}
                    >
                      <input
                        type="date"
                        id="check-out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                      <FaCalendarAlt className="calendar-icon" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="form-group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={3}
                    variants={slideInVariants("top", 0.7, 50, true)}
                  >
                    <label htmlFor="guests">Гости:</label>
                    <input
                      type="number"
                      id="guests"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    />
                  </motion.div>
                  <motion.div
                    className="order__wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={4}
                    variants={slideInVariants("top", 0.7, 50, true)}
                  >
                    <button
                      className="order__btn"
                      onClick={handleCheckAvailability}
                    >
                      Показать наличие
                    </button>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </RemoveScroll>
      )}
    </>
  );
};

export default Home;
