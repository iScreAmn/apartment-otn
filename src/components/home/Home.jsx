import { useState, useEffect } from "react";
import "./Home.css";
import { FaVideo, FaCalendarAlt } from "react-icons/fa";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

const Home = () => {
  // Состояния для управления модальными окнами и формой
  const [isModalOpen, setIsModalOpen] = useState(false); // Модальное окно бронирования
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Модальное окно видео
  const [isOpen, setIsOpen] = useState(false); // Автоматическое модальное окно
  const [checkIn, setCheckIn] = useState(""); // Дата заезда
  const [checkOut, setCheckOut] = useState(""); // Дата выезда
  const [guests, setGuests] = useState(1); // Количество гостей

  const videoId = "riZAVELEHpk"; // ID видео на YouTube

  // Эффект для автоматического открытия модального окна через 15 секунд
  useEffect(() => {
    const lastShownTime = localStorage.getItem("lastShownTime");
    const currentTime = new Date().getTime();

    if (!lastShownTime || currentTime - lastShownTime > 15000) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("lastShownTime", currentTime.toString());
      }, 15000);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
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
      <h2 className="services-title">
        Забронируй <span>Онлайн</span>
      </h2>

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
        <h3 className="minutes">8 минут от Площади Свободы</h3>

        <div className="home__wrapper">
          <div className="home__action">
            <h2 className="home__name">
              Old Tbilisi <span>Narikala</span>
            </h2>
            <div className="home__btns">
              {/* Кнопка для открытия модального окна бронирования */}
              <button
                className="home__btn"
                onClick={() => setIsModalOpen(true)}
              >
                Забронировать
              </button>
              {/* Кнопка для открытия модального окна с видео */}
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
              Аренда уютных апартаментов в самом сердце старого Тбилиси, прямо
              под крепостью Нарикала. Тебе у нас точно понравится
            </p>
          </div>
        </div>
        {/* Ссылка на апартаменты */}
        <div className="home__img">
          <a href="#!" className="home__link">
            Лучшие апартаменты <span>в историческом районе города</span>
          </a>
        </div>
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
