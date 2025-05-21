import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css";
import { useLanguage } from "../../context/LanguageContext";
import { feedback } from "../../data/feedback";
import { motion } from "framer-motion";
import CustomNextArrow from "../widgets/sliderArrows/CustomNextArrow";
import CustomPrevArrow from "../widgets/sliderArrows/CustomPrevArrow";

const Feedback = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const { t } = useLanguage();
  return (
    <section className="reviews">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("feedback.title")} <span>{t("feedback.span")}</span>
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Slider {...settings} className="review-slider">
            {feedback.map((item, index) => (
              <div key={index} className="review-card">
                <img className="review-avatar" src={item.img} alt="avatar" />
                <h3 className="review-title">
                  {t(item.titleKey || "feedback.defaultTitle")}
                </h3>
                <p className="review-text">
                  {t(item.textKey || "feedback.defaultText")}
                </p>
                <p className="review-name">
                  {t(item.nameKey || "feedback.defaultName")}
                </p>
              </div>
            ))}
          </Slider>
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <a
            href="https://www.booking.com/hotel/ge/old-tbilisi-narikala-apartment.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaFKIAQGYAQm4AQfIAQ3YAQHoAQH4AQyIAgGoAgO4AoOHpMEGwAIB0gIkZGRjMDNjMDQtMWM0NS00NzM3LTkwYjktNjgxNjg5ZDZiNTQ32AIG4AIB&sid=f93b789c27a2239665a09ade23fc1e8f&dest_id=2334374&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747518379&srpvid=fd809913feec07ca&type=total&ucfs=1&#tab-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="review-btn"
          >
            {t("feedback.btn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
