import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewsSlider.css";

const ReviewsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const reviews = [
    {
      title: "Отличный сервис",
      text: "Очень понравилось качество товаров и скорость доставки. Рекомендую!",
      name: "Иван Иванов",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      title: "Покупкой доволен",
      text: "Хорошее соотношение цена/качество. Обслуживание на высоте!",
      name: "Мария Петрова",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      title: "Супер!",
      text: "Быстрая доставка и отличная поддержка. Буду заказывать ещё.",
      name: "Сергей Кузнецов",
      avatar: "https://i.pravatar.cc/100?img=52",
    },
    {
      title: "Рекомендую",
      text: "Все соответствовало описанию, отличное качество товара.",
      name: "Ольга Смирнова",
      avatar: "https://i.pravatar.cc/100?img=68",
    },
    {
      title: "Очень приятно",
      text: "Вежливый персонал и приятный бонус при покупке. Спасибо!",
      name: "Дмитрий Козлов",
      avatar: "https://i.pravatar.cc/100?img=70",
    },
    {
      title: "Буду заказывать снова",
      text: "Большой выбор продукции и адекватные цены. Удачи вашему проекту!",
      name: "Елена Новикова",
      avatar: "https://i.pravatar.cc/100?img=85",
    },
  ];

  return (
    <section className="reviews none">
      <div className="container">
        <Slider {...settings} className="review-slider">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img className="review-avatar" src={review.avatar} alt="avatar" />
              <h3 className="review-title">{review.title}</h3>
              <p className="review-text">{review.text}</p>
              <p className="review-name">{review.name}</p>
            </div>
          ))}
        </Slider>
        <a href="#" className="review-btn">Все отзывы</a>
      </div>
    </section>
  );
};

export default ReviewsSlider;
