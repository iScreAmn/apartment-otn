import { useEffect, useState } from "react";
import { FaArrowUp, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

const IconButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();
  const [isBold, setIsBold] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setIsBold(!isBold);
    changeLanguage(isBold ? "ru" : "en");
  };

  return (
    <div className={`icon-buttons ${isVisible ? "visible" : ""}`}>
      <button className="icon-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </button>
      <button className="icon-button" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <button className={`icon-button ${isBold ? "bold" : ""}`} onClick={toggleLanguage}>
        <FaGlobe />
      </button>
    </div>
  );
};

export default IconButtons;
