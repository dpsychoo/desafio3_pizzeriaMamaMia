import React from 'react';
import pizzas from '../components/pizzas';
import CardPizza from '../components/CardPizza';

const Home = () => {
    return (
      <div className="container">
        <div className="row">
          {pizzas.map(pizza => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
