import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import Slider from "react-slick";
import { useLanguage } from "../../context/LanguageContext";


const Gallery = () => {
  const { t } = useLanguage();
  var settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">{t("gallery.title")} <span>{t("gallery.span")}</span></h2>
        <Slider className="slider" {...settings}>
          <div className="slider-item">
            <img className="slider-img" src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/482988117_1772622686628662_4017925264504040547_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=TLcYTsEMH1kQ7kNvwENQzBA&_nc_oc=AdlNp1JGcoYA5y7ddNFl2f8nToDhJxIuZ7OgFYcXlnulQM38XYBu5ADoY3X5RQPlepxvcslCoo0TzEeLSIeQYn4a&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=FxAxDe6kHaeK8nXq1cIDGg&oh=00_AYGdFbpDrp5LqAPShcPrm_dPpj9LbySKwbMC-a_y_lc_Xg&oe=67F640F4" alt="qwerty" />
          </div>
          <div className="slider-item">
            <img src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/482227756_1772623093295288_1733270738161199888_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=b9JjzkTFBHQQ7kNvwESDqNC&_nc_oc=AdmAKqY7xDJ7pRagAzbi2LJaAmXgN6RSd_4fhWsCsI8nKM2ClXusPNSJH3krwWyPUciRVaoFmL2MXE49dGWYKZHN&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=BdfsZ-7QyJMtw6nQSNxYlw&oh=00_AYHp4jy-3-BjEVdUMRdRaaLD4l0IhADag_75HMNwWpuYvQ&oe=67F64E30" alt="asd" />
          </div>
          <div className="slider-item">
            <img src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/484806942_1772622806628650_6722151269421788419_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=AxgfkhRINq0Q7kNvwGTlUKS&_nc_oc=AdmTPgbfuJI3bDSFILTH-hKTalGZES5JrW_0Ac_0dF1k0OJub5gyLzc626redOZCzwFpbMfxccu0CVnPkl5Hynsf&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=jH3zc3vZb36BnmhUhfZseg&oh=00_AYHVaojOJUWPicezzUSSnNYQzCEJnxPp7yuvKb58iPov8w&oe=67F645A5" alt="sad" />
          </div>
          <div className="slider-item">
            <img src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/484371878_1772622843295313_2635003612308108620_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=-b5EFgl-t7gQ7kNvwGp4wA4&_nc_oc=Adk8graDcbAq6L7aSB0xTXZONSbP8vPZDP15iw4pKADVBHs0ZoC3w7yjy_JybTpRFrIopNaXBNKX2d7LaY3TgPUf&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=aSJ8B8U70udeUlUOT-ESYQ&oh=00_AYFBjerhvZO31DAQh3SGsGuoawyQNkuCnvCMyDZ4FtGHcQ&oe=67F6196B" alt="das" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
