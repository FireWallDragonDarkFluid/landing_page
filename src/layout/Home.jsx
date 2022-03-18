import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Front from "../components/Front";
import Footer from '../components/Footer';
import News from '../components/News';

const Home = () => {
  return (
    <>
    <div className="container">
        <Navbar />
        <News />
        <Hero />
        <Front />
    </div>
        <Footer />
    </>
  )
}

export default Home