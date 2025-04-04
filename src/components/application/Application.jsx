import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Application.css";
import { application } from "../../assets/images";

const Application = () => {
  const [phone, setPhone] = useState(""); // Состояние для номера телефона

  return (
    <section className="application">
      <div className="container">
        <div className="application__wrapper">
          <form className="application__form">
            <h2 className="application__title">
              Остались вопросы? <br /> <span>мы с радостью ответим</span>
            </h2>

            {/* Поле для ввода телефона с выбором страны */}
            <div className="application__form-group">
              <PhoneInput
                country={"ge"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="application__phone-input"
                buttonClass="application__phone-button"
                placeholder="Ваш номер телефона"
              />
            </div>

            {/* Поле для ввода имени */}
            <div className="application__form-group">
              <input
                type="text"
                id="name"
                className="application__input"
                placeholder="Ваше имя"
                required
              />
            </div>

            {/* Кнопка отправки */}
            <button type="submit" className="application__submit">
              Оставить заявку
            </button>
          </form>
          <div className="application__image">
            <img src={application} alt="application" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
