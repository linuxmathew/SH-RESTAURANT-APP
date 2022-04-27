import React from 'react';
import PizzaImg from '../images/pizza.png';


const Hero = () => {
    return (
        <div>
            <section className="heroSection">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-5 px-5">
                            
                                <h2 className="promo">PROMO!!!</h2>
                                <h2 className="buy">BUY <br/> TWO <span className="pizza">PIZZAS</span></h2> 
                                <p className="get">Get one for free</p>
                                <p className="h5 text-white mb-4">Free Delivery within Lagos</p>
                                <a className="orderBtn" href="/">ORDER NOW</a>
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <img className="pizzaImg" src={ PizzaImg } alt="Pizza" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Hero;