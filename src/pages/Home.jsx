import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Project from '../Components/Project';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <About></About>
           <Skills></Skills>
           <Services></Services>
           <Project></Project>
           <Contact></Contact>
        </div>
    );
};

export default Home;