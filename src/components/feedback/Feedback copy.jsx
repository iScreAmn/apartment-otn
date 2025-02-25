import "./Feedback.css";
import { avatar1, avatar2, avatar3 } from "../../assets/images/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="feedback">
      <div className="container-feedback">
        <h2 className="services-title">
          Почему <span>нас выбирают</span>
        </h2>
        <div className="feedback__wrapper">
          <Slider {...settings}>
              <div className="feedback__card">
                <img src={avatar1} alt="" className="feedback__img" />
                <p className="feedback__subtitle">
                  Очень повезло оказаться именно в эти апартаменты, близость с
                  центром очень радует, рядом есть много магазинов
                </p>
                <h2 className="feedback__name">Дима</h2>
              </div>
              <div className="feedback__card">
                <img src={avatar2} alt="" className="feedback__img" />
                <p className="feedback__subtitle">
                  Была рада побывать в этих апартаментах, кафешки рядом, пешком
                  можно дойти до всех достопримечательностей
                </p>
                <h2 className="feedback__name">Лена</h2>
              </div>
              <div className="feedback__card">
                <img src={avatar3} alt="" className="feedback__img" />
                <p className="feedback__subtitle">
                  Круто попасть в такие апартаменты, вокруг много мест куда можно
                  сходить поужинать и насладиться видом
                </p>
                <h2 className="feedback__name">Миша</h2>
              </div>
          </Slider>  
        </div>
      </div>
    </section>
  );
};

export default Feedback;
