import { useEffect } from "react"
import "./Location.css"

const Location = () => {
      useEffect(() => {
        // Загрузка скрипта
        const script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
        script.type = 'module';
        document.head.appendChild(script);
    
      
    
        // Очистка при размонтировании
        return () => {
          document.head.removeChild(script);
        };
      }, []);
    return (
      <section className="location">
        <gmpx-api-loader 
          key="AIzaSyCLjHu4doZWs61BZGMQzNGwv51_LbVC3WI" 
          solution-channel="GMP_GE_mapsandplacesautocomplete_v2"
        ></gmpx-api-loader>
        <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID">
          <div slot="control-block-start-inline-start" className="place-picker-container">
            <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
          </div>
          <gmp-advanced-marker></gmp-advanced-marker>
        </gmp-map>
      </section>
      
    )
}

export default Location