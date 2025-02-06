import "./Services.css"

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">В нашем доме <span>есть:</span></h2>
        <div className="services__wrapper">
          <div className="card">
            <i className="fa-solid fa-wifi"></i>
            <h2 className="card__title">Быстрый Интернет</h2>
            <p className="card_subtitle">На территории каждого дома, есть интернет и быстрый доступ к WiFi с различными
              настройками</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-tv"></i>
            <h2 className="card__title">HD Телевиденье</h2>
            <p className="card_subtitle">На территории каждого дома, есть HD телевизор и доступ к фильмам с различными
              языками</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-plane"></i>
            <h2 className="card__title">Трансфер с аэропорта</h2>
            <p className="card_subtitle">Мы можем организовать трансфер с любого аэропорта страны в удобное для вас время
            </p>
            <button className="card__btn">подроднее</button>
          </div>
          <div className="card">
            <i className="fa-solid fa-location-dot"></i>
            <h2 className="card__title">Идеальная локация</h2>
            <p className="card_subtitle">Апартаменты расположены в самом центре старого города, все топовые локации рядом
            </p>
            <button className="card__btn">подроднее</button>
          </div>
          <div className="card">
            <i className="fa-solid fa-square-parking"></i>
            <h2 className="card__title">Паркинг</h2>
            <p className="card_subtitle">На территории дома, есть паркинг и быстрый доступ к машине</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mountain-sun"></i>
            <h2 className="card__title">Туры</h2>
            <p className="card_subtitle">Мы можем предложить вам интересные туры на время вашего проживания</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services