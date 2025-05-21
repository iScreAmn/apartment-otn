import { useState, useEffect } from "react";
import "./Home.css";
import { FaVideo, FaCalendarAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { booking } from "../../assets/images";
import { RiTelegramLine } from "react-icons/ri";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";
import { useLanguage } from "../../context/LanguageContext";

const Home = () => {
  // Состояния для управления модальными окнами и формой
  const [isModalOpen, setIsModalOpen] = useState(false); // Модальное окно бронирования
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Модальное окно видео
  const [isOpen, setIsOpen] = useState(false); // Автоматическое модальное окно
  const [checkIn, setCheckIn] = useState(""); // Дата заезда
  const [checkOut, setCheckOut] = useState(""); // Дата выезда
  const [guests, setGuests] = useState(1); // Количество гостей

  const videoId = "riZAVELEHpk"; // ID видео на YouTube

  const { t } = useLanguage();

  // Эффект для автоматического открытия модального окна через 15 секунд
  useEffect(() => {
    const disableAutoModal = import.meta.env.VITE_DISABLE_AUTO_MODAL === "true";
    if (disableAutoModal) return;

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

  // Обработчик для проверки доступности
  const handleCheckAvailability = () => {
    console.log("Check-In:", checkIn);
    console.log("Check-Out:", checkOut);
    console.log("Guests:", guests);
    alert("Проверка наличия...");
  };

  // Функция для рендеринга формы бронирования
  const renderBookingForm = () => (
    <section className="booking-section" id="booking">
      <h2 className="booking-main-title">
        {t("home.book")} <span>{t("home.bookSpan")}</span>
      </h2>
      <div className="booking__wrapper">
        <div className="booking-text">
          <h2 className="booking__title">
            Сайт находится на стадии разработки
          </h2>
          <p className="booking__subtitle">
            Переходите на сайт наших партнеров Booking.com или свяжитесь с нами
            напрямую
          </p>
          <ul className="booking-socials">
            <li className="socials-icons">
              <a href="">
                <TbBrandBooking />
              </a>
            </li>
            <li className="socials-icons">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="socials-icons">
              <a href="">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="socials-icons">
              <a href="">
                <RiTelegramLine />
              </a>
            </li>
          </ul>
        </div>
        <img className="booking-img" src={booking} alt="booking" />
      </div>

      <div className="booking-form none">
        {/* Поле для выбора даты заезда */}
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
        {/* Поле для выбора даты выезда */}
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
        {/* Поле для ввода количества гостей */}
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
        {/* Кнопка для проверки доступности */}
        <motion.div
          className="order__wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={4}
          variants={slideInVariants("top", 0.7, 50, true)}
        >
          <button className="order__btn" onClick={handleCheckAvailability}>
            Показать наличие
          </button>
        </motion.div>
      </div>
    </section>
  );

  // Функция для рендеринга модального окна
  const renderModal = (isOpen, onClose, content) => (
    <RemoveScroll>
      <div className="home-modal-overlay" onClick={onClose}>
        <div
          className="home-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="home-modal-close" onClick={onClose}>
            ×
          </button>
          {content}
        </div>
      </div>
    </RemoveScroll>
  );

  return (
    <>
      <div className="container">
        <motion.h3
          className="minutes"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("home.minutes")}
        </motion.h3>

        <div className="home__wrapper">
          <motion.div
            className="home__action"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="home__name">
              Old Tbilisi <span>Narikala</span>
            </h2>
            <div className="home__btns">
              {/* Кнопка для открытия модального окна бронирования */}
              <button
                className="home__btn"
                onClick={() => setIsModalOpen(true)}
              >
                {t("home.booking")}
              </button>
              {/* Кнопка для открытия модального окна с видео */}
              <button
                className="home__video-btn"
                onClick={() => setIsVideoOpen(true)}
              >
                {t("home.video")}
                <FaVideo />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="home__description"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p>{t("home.description")}</p>
          </motion.div>
        </div>
        <motion.div
          className="home__img"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a href="#!" className="home__link">
            {t("home.cover")} <span>{t("home.span")}</span>
          </a>
        </motion.div>
      </div>

      {/* Модальное окно с видео */}
      {isVideoOpen &&
        renderModal(
          isVideoOpen,
          () => setIsVideoOpen(false),
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}

      {/* Модальное окно с формой бронирования */}
      {isModalOpen &&
        renderModal(
          isModalOpen,
          () => setIsModalOpen(false),
          renderBookingForm()
        )}

      {/* Автоматическое модальное окно с формой бронирования */}
      {isOpen &&
        renderModal(isOpen, () => setIsOpen(false), renderBookingForm())}
    </>
  );
};

export default Home;
