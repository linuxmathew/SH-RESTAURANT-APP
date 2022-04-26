import React from 'react';
import Book from './Book';
import Footer from './Footer';
import Navbar from './Navbar';


const Contact = () => {
    return(
        
        <section>
            <Navbar/>
            <div id='section-top'>
                <div className='container'>
                    <h4 style={{marginBottom:'150px'}}id ='card-title'>CONTACT US</h4>
                    <p className='text-white'>Feel free to contact us</p>
                </div>
            </div>
            <Book/>
            <Footer />
        </section>
    );
}


export default Contact;