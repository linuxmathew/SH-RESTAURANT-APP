import React from 'react';
import bitePizza from '../images/avatar-2.png';
import Recipe from './Recipe';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = () => {
    return(
        <section>
            <Navbar />
            <div id=''>
                <div className='mb-4'>
                    <img src={bitePizza} className='w-100 d-block' alt='Bite Pizza' />
                </div>
                <div className='container'>    
                    <div className=''>
                        <h2>Top Recipes</h2>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-6'>
                                <Recipe name='BBQ Chicken' price = 'N4000' />
                            </div>
                            <div className='col-12 col-sm-12 col-md-6'>
                                <Recipe name='Chicken Burrito' price='N5000'/>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6'>
                                <Recipe name='Pizza Sausage'price ='N3500'/>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6'>
                                <Recipe name='Shawarma' price='N5350'/>
                            </div>


                        </div>
                        
                    </div>

                </div>            
            </div>
            <Footer/>
        </section>
    );
}


export default Product;