import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Application.css";
import { application } from "../../assets/images";
import { useLanguage } from "../../context/LanguageContext";
import emailjs from 'emailjs-com';

const Application = () => {
  const [phone, setPhone] = useState(""); // Состояние для номера телефона
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Кнопка отправки */}
            <button
              type="button"
              className="application__submit"
              onClick={() => {
                const phoneDigits = phone.replace(/\D/g, "");
                if (!name.trim()) {
                  alert("Пожалуйста, введите имя.");
                  return;
                }
                if (phoneDigits.length !== 12) {
                  alert("Телефон должен содержать ровно 12 цифр.");
                  return;
                }

                const templateParams = {
                  name: name,
                  phone: phone,
                };

                emailjs
                  .send('service_lou20hk', 'template_2sapypq', templateParams, 'iIFVY9HdC199NM9_c')
                  .then(
                    () => {
                      setSuccessMessage("Ваша заявка успешно отправлена!");
                      setName("");
                      setPhone("");
                    },
                    (error) => {
                      console.error('Ошибка отправки:', error);
                      alert("Ошибка при отправке заявки. Пожалуйста, попробуйте позже.");
                    }
                  );
              }}
            >
              {t("application.button")}
            </button>
            {successMessage && <p className="application__success">{successMessage}</p>}
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
