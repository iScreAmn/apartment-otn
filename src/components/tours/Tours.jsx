import { useState } from 'react';
import "./Tours.css"
import { summerTours, winterTours } from '../../data/tours';

const Tours = () => {
  const [season, setSeason] = useState('winter');
  
 

  return (
    <section className="tours" id="tours">
      <div className="container">
        <h2 className="services-title">
          Чем заняться в Грузии <br/><span>в любой сезон:</span>
        </h2>
        <div className="toggle__wrapper">
          <button 
            className={`tour-tab-left ${season === 'summer' ? 'active' : ''}`}
            onClick={() => setSeason('summer')}
          >
            Летний досуг
          </button>
          <button 
            className={`tour-tab-right ${season === 'winter' ? 'active' : ''}`}
            onClick={() => setSeason('winter')}
          >
            Зимний досуг
          </button>
        </div>
        <div className={`tour__wrapper ${season}`}>
          {(season === 'summer' ? summerTours : winterTours).map((tour, index) => (
            <div className="tour" key={index}>
              <h3 className="tour__title">{tour.title}</h3>
              <p className="tour__subtitle">{tour.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;