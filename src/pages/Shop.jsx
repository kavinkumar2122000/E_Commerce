import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      <Footer/>
    
    </div>
  );
};

export default Shop;
