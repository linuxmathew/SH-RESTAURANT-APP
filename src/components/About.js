import React from 'react';
import Book from './Book';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
    return (
        <section>
            <Navbar />
            <div id='section-top'>
                <div className='container'>
                    <h4 style={{marginBottom:'50px'}}id ='card-title'>ABOUT US</h4>
                    <p className='text-white display-6'>The website, bla blabla is built to perform the following functions:</p>
                    <ul className='text-white'>
                        <li>
                            <p className=''>Create accounts for ease and complete access to our services.</p>
                        </li>
                        <li>
                            <p>Gives users acess to order food at their convenience ahead ofvisitation or home delivery.</p>
                        </li>
                        <li>
                            <p>Make reservations for table ahead of visitation</p>
                        </li>
                        <li>
                            <p>Search for Products and make a wishlist/cart</p>
                        </li>
                        <li>
                            <p>Allow user to make payment online</p>
                        </li>
                        <li>
                            <p>Subscribe to the weekly newsletter for all the latest updates</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Book/>
            <Footer/>
        </section>
    );
}

export default About;