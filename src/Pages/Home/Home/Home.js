import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FindJob from '../FindJob/FindJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindJob></FindJob>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;