import React from  'react';
import Navbar from './Navbar';
import Hero from './Hero'
import Footer from './Footer';
import Food from './Food';
import Book from './Book';


const Home = () => {
    return (
        <div>
            <section>
                <Navbar />
                <Hero />
                <Food />
                <Book />
                <Footer />
            </section>
        </div>
    );
}


export default Home;