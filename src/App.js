import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import CustomCard from './sections/Card/Card'; 
import Banner from './sections/Banner/Banner';
//import Features from './sections/Features/Features';
import About from './sections/About/About';




function App() {
  return (
    <div>
    <Navbar/>
      <Container>

        <Banner/>

        <CustomCard/>

        {/* <Features/> */}

        <About/>
      
      
      </Container>   
    <Footer/>
    </div>

       
  );
}

export default App;
