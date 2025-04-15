import "./Services.css";
import { useState } from "react";
import { FaWifi, FaTv, FaPlane } from "react-icons/fa";
import { FaMountainSun, FaSquareParking } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

import { IoLocationOutline } from "react-icons/io5";
import { modalContent } from "../../data/services";
import { RemoveScroll } from "react-remove-scroll";
import { useLanguage } from "../../context/LanguageContext";

const Services = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleTransferModalOpen = () => {
    setIsTransferModalOpen(true);
  };

  const handleLocationModalOpen = () => {
    setIsLocationModalOpen(true);
  };

  const handleModalClose = () => {
    setIsTransferModalOpen(false);
    setIsLocationModalOpen(false);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title">
          {t("services.servicesTitle")}{" "}
          <span>{t("services.servicesSpan")}</span>
        </h2>
        <div className="services__wrapper">
          <div className="card">
            <FaWifi />
            <h2 className="card__title">{t("services.servCardTitle1")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle1")}</p>
          </div>
          <div className="card">
            <FaTv />
            <h2 className="card__title">{t("services.servCardTitle2")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle2")}</p>
          </div>
          <div className="card">
            <FaPlane />
            <h2 className="card__title">{t("services.servCardTitle3")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle3")}</p>
            <button className="card__btn" onClick={handleTransferModalOpen}>
              {t("services.servCardButton")}
            </button>
          </div>
          <div className="card">
            <IoLocationOutline />
            <h2 className="card__title">{t("services.servCardTitle4")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle4")}</p>
            <button className="card__btn" onClick={handleLocationModalOpen}>
              {t("services.servCardButton")}
            </button>
          </div>
          <div className="card">
            <FaSquareParking />
            <h2 className="card__title">{t("services.servCardTitle5")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle5")}</p>
          </div>
          <div className="card">
            <FaMountainSun />
            <h2 className="card__title">{t("services.servCardTitle6")}</h2>
            <p className="card_subtitle">{t("services.servCardSubtitle6")}</p>
          </div>
        </div>
      </div>

      {isTransferModalOpen && (
        <RemoveScroll>
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-main-title">
                <FaPlane />
                <h2 className="modal-title">{t(modalContent.transfer.title)}</h2>
              </div>    
              <div className="modal__wrapper">
                <button className="modal-close" onClick={handleModalClose}>
                  ×
                </button>
                <div className="modal-text-wrapper">
                  <p className="modal-text">{t(modalContent.transfer.text)}</p>
                  <ul className="modal-desc">
                    {modalContent.transfer.desc.map((key, index) => (
                      <li key={index} className="modal-desc-item">
                        <span className="modal-desc">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-img-container">
                  <img
                    className="modal-img"
                    src={modalContent.transfer.img}
                    alt={modalContent.transfer.title}
                  />
                </div>
              </div>
              <div className="modal-buttons">
                <button className="transfer-btn ">{t("transferButton")}</button>
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}

      {isLocationModalOpen && (
        <RemoveScroll>
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-main-title">
                <IoLocationOutline />
                <h2 className="modal-title">{t(modalContent.location.title)}</h2>
              </div>
              <div className="modal__wrapper">
                <button className="modal-close" onClick={handleModalClose}>
                  ×
                </button>
                <div className="modal-text-wrapper">
                  <p className="modal-text">{t(modalContent.location.text)}</p>
                  <ul className="modal-desc">
                    {modalContent.location.desc.map((key, index) => (
                      <li key={index} className="modal-desc-item">
                        <span className="modal-desc">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-img-container">
                  <img
                    className="modal-img modal-location"
                    src={modalContent.location.img}
                    alt={modalContent.location.title}
                  />
                </div>
              </div>
              <div className="modal-buttons">
                <button className="transfer-btn">{t("locationButton")}</button>
                  <ul className="social-icons">
                    <li><a href=""><TbBrandBooking /></a></li>
                    <li><a href=""><FaInstagram /></a></li>
                    <li><a href=""><IoLogoWhatsapp /></a></li>
                    <li><a href=""><FaTelegram /></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </section>
  );
};

export default Services;
