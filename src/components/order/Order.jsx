import { useState } from "react";
import "./Order.css";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { slideInVariants } from "../../../utils/animation";

const Order = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleCheckAvailability = () => {
    // Логика для проверки наличия
    console.log("Check-In:", checkIn);
    console.log("Check-Out:", checkOut);
    console.log("Guests:", guests);
    alert("Проверка наличия...");
  };

  return (
    <section className="booking-section" id="booking">
      <h2 className="services-title">
        Забронируй <span>Онлайн</span>
      </h2>
      <motion.div
        className="booking-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("left", 0.9, 100, false)}
      >
        <div className="form-group">
          <label htmlFor="check-in">Заезд:</label>
          <div className="input-with-icon">
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="Выберите дату заезда"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Выезд:</label>
          <div className="input-with-icon">
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="Выберите дату выезда"
            />
            <FaCalendarAlt className="calendar-icon" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Гости:</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder="Количество гостей"
          />
        </div>
        <div className="order__wrapper">
          <button className="order__btn" onClick={handleCheckAvailability}>
            Показать наличие
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Order;
