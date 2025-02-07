import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "riZAVELEHpk"; // Замените на нужный YouTube ID

  // Функция для плавного скролла
  const scrollToBooking = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    const targetId = e.currentTarget.getAttribute('href'); // Получаем ID целевого элемента
    const targetElement = document.querySelector(targetId); // Находим целевой элемент

    if (targetElement) {
      // Плавный скролл к целевому элементу
      targetElement.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start'      // Выравнивание по верху элемента
      });
    }
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
            <a href="#booking" className="home__btn" onClick={scrollToBooking}>
              Забронировать
            </a>
            <button 
              className="home__video-btn" 
              onClick={() => setIsModalOpen(true)}
            >
              Смотреть дом
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
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>✖</button>
            <iframe
              
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;