import "../about/AboutPage.css";
import RollingGallery from '../../components/widgets/rollingGallery/RollingGallery'
  


const AboutPage = () => {
  return (
    <section className="about">
      <div className="container">
        <RollingGallery autoplay={false} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default AboutPage;
