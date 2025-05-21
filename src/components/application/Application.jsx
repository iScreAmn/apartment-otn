import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Application.css";
import { application, block1, block2 } from "../../assets/images";
import { useLanguage } from "../../context/LanguageContext";
import emailjs from "emailjs-com";
import Logo from "../widgets/logo/Logo";
import FallingText from "../widgets/fallingText/FallingText";

import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { RiTelegramLine } from "react-icons/ri";

const Application = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const { t } = useLanguage();

  const handleSubmit = () => {
    const phoneDigits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      alert("Пожалуйста, введите имя.");
      return;
    }
    if (phoneDigits.length !== 12) {
      alert("Телефон должен содержать ровно 12 цифр.");
      return;
    }

    setShowModal(true); // Show modal
    setIsSubmitting(true); // Disable modal close

    const templateParams = {
      name: name,
      phone: phone,
    };

    emailjs
      .send(
        "service_lou20hk",
        "template_2sapypq",
        templateParams,
        "iIFVY9HdC199NM9_c"
      )
      .then(
        () => {
          setSuccessMessage("");
          setName("");
          setPhone("");
          setTimeout(() => {
            setShowModal(false); // Close modal after success animation
            setSuccessMessage(""); // Clear success message
          }, 1000000); // Adjust duration as needed
        },
        (error) => {
          console.error("Ошибка отправки:", error);
          alert("Ошибка при отправке заявки. Пожалуйста, попробуйте позже.");
          setShowModal(false); // Close modal on error
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Re-enable modal close
      });
  };

  return (
    <section className="application" id="application">
      <div className="container">
        <div className="application__wrapper">
          <form className="application__form">
            <h2 className="application__title">
              {t("application.title")} <br />{" "}
              <span>{t("application.span")}</span>
            </h2>

            <div className="application__form-group">
              <PhoneInput
                country={"ge"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="application__phone-input"
                buttonClass="application__phone-button"
                placeholder=""
              />
              <input
                type="text"
                id="name"
                className="application__input"
                placeholder={t("application.placeholder")}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="application__submit"
              onClick={handleSubmit}
            >
              {t("application.button1")}
            </button>
            <button
              href="https://t.me/myveryfirsttimetg_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="application__submit application__submit--telegram"
            >
              {t("application.button2")}
            </button>
            {successMessage && (
              <p className="application__success">{successMessage}</p>
            )}
          </form>
          <div className="application__image">
            <img src={application} alt="application" />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1mYOr5k7uKZ78g-fxljx42RQf1HkQdVg&ehbc=2E312F"
          className="location__map"
        ></iframe>
        <div className="application__titles">
          <h3 className="location__title">📍 Lado Asatiani #20</h3>
          <h3>🚨 Другие наши продукты</h3>
        </div>
        <div className="social__wrapper">
          <div className="application-socials">
            <div className="social-icon">
              <a className="social-icon-link" href="#">
                <TbBrandBooking />
              </a>
            </div>
            <div className="social-icon">
              <a className="social-icon-link" href="#">
                <FaInstagram />
              </a>
            </div>
            <div className="social-icon">
              <a className="social-icon-link" href="#">
                <IoLogoWhatsapp />
              </a>
            </div>
            <div className="social-icon">
              <a className="social-icon-link" href="#">
                <RiTelegramLine />
              </a>
            </div>
          </div>
          <div className="application-blocks">
            <a
              href="https://t.me/myveryfirsttimetg_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={block1} alt="#" />
            </a>
            <a
              href="https://iscreamn.github.io/game-jumper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={block2} alt="#" />
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content-application">
            {isSubmitting ? (
              <Logo
                text="OLD•TBILISI•NARIKALA•"
                onHover="speedUp"
                spinDuration={20}
                className="loading-animation"
              />
            ) : (
              <FallingText
                text={`Заявка успешно отправлена! Мы скоро с вами свяжемся`}
                highlightWords={["Мы", "скоро", "с", "вами", "свяжемся"]}
                highlightClass="highlighted"
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="28px"
                mouseConstraintStiffness={0.9}
              />
            )}
            {!isSubmitting && (
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Application;
