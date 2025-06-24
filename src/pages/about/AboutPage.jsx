import "../about/AboutPage.css";
import bookingImage from "../../assets/images/tours/booking.jpg";

const AboutPage = () => {

  return (
    <section className="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero__image">
            <img src={bookingImage} alt="Scandi House" />
          </div>
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              Добро пожаловать в наши семейные апартаменты<br />
              <span className="about-hero__highlight">«Old Tbilisi Narikala»</span>
            </h1>
            <div className="about-hero__text">
              <p>Нас зовут Кирилл и Ольга, мы являемся основателями проекта.</p>
              <p>
                Мы решили создать особенное место для отдыха, куда можно приехать
                всей семьей и где каждый найдёт себе развлечение по душе. В этот
                проект мы вложили частичку себя: самостоятельно разрабатывали
                концепцию и дизайн, продумывали мельчайшие детали.
              </p>
              <p className="about-hero__closing">Желаем вам прекрасно провести время!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
