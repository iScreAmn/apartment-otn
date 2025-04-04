import Logo from "../logo/Logo";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="nav__logo">
            <Logo
              text="OLD•TBILISI•NARIKALA•"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          <div className="footer__info">
            <p className="footer__copyright">
              OLD TBILISI <span className="footer-span">NARIKALA</span>, All
              rights reserved.
            </p>
            <p className="footer__year">© {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
