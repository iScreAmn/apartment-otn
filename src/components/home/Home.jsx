import "./Home.css";

const home = () => {
  return (
    <>
      <div className="home__wrapper">
        <div className="home__action">
          <h3 className="minutes">8 минут от Площади Свободы</h3>
          <h2 className="home__name">
            Old Tbilisi <span>Narikala</span>
          </h2>
          <div className="home__btns">
            <a href="#!" className="home__btn">
              Забронировать
            </a>
            <a href="#!" className="home__video-btn">
              Смотреть дом
            </a>
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
    </>
  );
};

export default home;
