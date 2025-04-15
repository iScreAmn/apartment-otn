import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import './ThemeSwitcher.css';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className="label">
        <FaSun className="sun-icon"/>
        <FaMoon className="moon-icon"/>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
