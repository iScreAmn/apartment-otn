import { logo } from "../../assets/images";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="nav__logo">
            <a href="#!">
              <img src={logo} alt="Main Image" />
            </a>
          </div>
          <p className="footer__copyright">OLD TBILISI <span className="footer-span">NARIKALA</span>, All rights reserved.</p>
          <p className="footer__year">© {currentYear}</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
