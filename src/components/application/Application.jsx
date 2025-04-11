import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Application.css";
import { application } from "../../assets/images";
import { useLanguage } from "../../context/LanguageContext";


const Application = () => {
  const [phone, setPhone] = useState(""); // Состояние для номера телефона
  const { t } = useLanguage();


  return (
    <section className="application" id="application">
      <div className="container">
        <div className="application__wrapper">
          <form className="application__form">
            <h2 className="application__title">
              {t("application.title")} <br/> <span>{t("application.span")}</span>
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
                placeholder={t('application.placeholder')}
                required
              />
            </div>


            {/* Кнопка отправки */}
            <button type="submit" className="application__submit">
              {t("application.button")}
            </button>
          </form>
          <div className="application__image">
            <img src={application} alt="application" />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1mYOr5k7uKZ78g-fxljx42RQf1HkQdVg&ehbc=2E312F"
          className="location__map"
        ></iframe>
      </div>
    </section>
  );
};

export default Application;
