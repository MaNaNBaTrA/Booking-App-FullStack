import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Offers from '../../Components/Offers/Offers';
import Explore from '../../Components/Explore/Explore';
import Deals from '../../Components/Deals/Deals';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';
import Featured from '../../Components/featured/featured';
import PropertyList from '../../Components/propertyList/PropertyList';
import FeaturedProperties from '../../Components/featuredProperties/featuredProperties';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="HomeContainer">
        <Offers/>
        <Explore/>
        <Deals/>
        <div className="homeTitle">Featured</div>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
      </div>
      <MailList/>
      <Footer/>
    </>
  )
}

export default Home
