import React from 'react';
import OutlateCastomer from '../OutlateSection/OutlateCastomer';
import Philosophy from '../PhilosopySection/Philosophy';
import SimpilifyCard from '../SimpilifyCardSection/SimpilifyCard';
import Slidersection from '../SliderSection/Slidersection';
import CounterSection from '../CounterSection/CounterSection';
import IconSection from '../CompanyIconSection/IconSection';
import Footer from '../FooterSection/Footer';

const Home = () => {
    return (
        <div className='my-20 w-10/12 mx-auto'>
            <OutlateCastomer></OutlateCastomer>
            <Philosophy></Philosophy>
            <SimpilifyCard></SimpilifyCard>
            <Slidersection></Slidersection>
            <CounterSection></CounterSection>
            <IconSection></IconSection>
        </div>
    );
};

export default Home;