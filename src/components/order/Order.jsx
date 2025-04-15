import "./Order.css";
import { useState } from "react";
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
    <section className="booking-section none" id="booking">
      <h2 className="services-title">
        Забронируй <span>Онлайн</span>
      </h2>
      
      <div className="booking-form none">
        <div className="form-group">
          <label htmlFor="check-in">Заезд:</label>
          <motion.div
            className="input-with-icon"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("top", 0.7, 50, true)}
          >
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <FaCalendarAlt className="calendar-icon" />
          </motion.div>
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Выезд:</label>
          <motion.div
            className="input-with-icon"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("top", 0.7, 50, true)}
          >
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <FaCalendarAlt className="calendar-icon" />
          </motion.div>
        </div>
        <motion.div
          className="form-group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={3}
          variants={slideInVariants("top", 0.7, 50, true)}
        >
          <label htmlFor="guests">Гости:</label>
          <input
            type="number"
            id="guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </motion.div>
        <motion.div
          className="order__wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={4}
          variants={slideInVariants("top", 0.7, 50, true)}
        >
          <button className="order__btn" onClick={handleCheckAvailability}>
            Показать наличие
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Order;
