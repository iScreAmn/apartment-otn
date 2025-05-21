import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "./Gallery.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  sliderPic1,
  sliderPic2,
  sliderPic3,
  sliderPic4,
} from "../../assets/images";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Slider {...settings}>
        <div className="slider-item">
          <img src={sliderPic1} className="slider_pic" alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src={sliderPic2} className="slider_pic" alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src={sliderPic3} className="slider_pic" alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src={sliderPic4} className="slider_pic" alt="Slide 1" />
        </div>
      </Slider>
    </motion.div>
  );
};

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <section className="gallery">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {t("gallery.title")} <span>{t("gallery.span")}</span>
        </motion.h2>
        <SimpleSlider />
      </div>
    </section>
  );
};

export default Gallery;
