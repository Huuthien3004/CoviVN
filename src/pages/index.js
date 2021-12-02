import React, {useState} from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection'
import Footer from '../components/layout/Footer';
import Services from '../components/layout/ServicesSection';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (

      <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <Services />
    <Footer />
    </>


  );
};

export default Home;