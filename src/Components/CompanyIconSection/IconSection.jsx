import React from 'react';
import icon1 from "../../assets/CompanyLogo/1.webp"
import icon2 from "../../assets/CompanyLogo/2.webp"
import icon3 from "../../assets/CompanyLogo/3.webp"
import icon4 from "../../assets/CompanyLogo/4.webp"
import icon5 from "../../assets/CompanyLogo/5.webp"
import icon6 from "../../assets/CompanyLogo/6.webp"
import icon7 from "../../assets/CompanyLogo/7.webp"
import icon8 from "../../assets/CompanyLogo/8.webp"
import icon9 from "../../assets/CompanyLogo/9.webp"
import icon10 from "../../assets/CompanyLogo/10.webp"
import icon11 from "../../assets/CompanyLogo/11.webp"
import icon12 from "../../assets/CompanyLogo/12.webp"
import icon13 from "../../assets/CompanyLogo/13.webp"
import icon14 from "../../assets/CompanyLogo/14.webp"
import icon15 from "../../assets/CompanyLogo/15.webp"
import Marquee from "react-fast-marquee";

const IconSection = () => {
    return (
        <div>

        <div className='lg:grid lg:grid-cols-5 grid-cols-2 gap-5 items-center my-10 hidden'>
            <p><img src={icon1} alt="" /></p>
            <p><img src={icon2} alt="" /></p>
            <p><img src={icon3} alt="" /></p>
            <p><img src={icon4} alt="" /></p>
            <p><img src={icon5} alt="" /></p>
            <p><img src={icon6} alt="" /></p>
            <p><img src={icon7} alt="" /></p>
            <p><img src={icon8} alt="" /></p>
            <p><img src={icon9} alt="" /></p>
            <p><img src={icon10} alt="" /></p>
            <p><img src={icon11} alt="" /></p>
            <p><img src={icon12} alt="" /></p>
            <p><img src={icon13} alt="" /></p>
            <p><img src={icon14} alt="" /></p>
            <p><img src={icon15} alt="" /></p>
           
        </div>

        <div className='lg:hidden flex'>
        <Marquee className='flex items-center gap-4'>
            <p><img src={icon1} alt="" /></p>
            <p><img src={icon2} alt="" /></p>
            <p><img src={icon3} alt="" /></p>
            <p><img src={icon4} alt="" /></p>
            <p><img src={icon5} alt="" /></p>
            <p><img src={icon6} alt="" /></p>
            <p><img src={icon7} alt="" /></p>
            <p><img src={icon8} alt="" /></p>
            <p><img src={icon9} alt="" /></p>
            <p><img src={icon10} alt="" /></p>
            <p><img src={icon11} alt="" /></p>
            <p><img src={icon12} alt="" /></p>
            <p><img src={icon13} alt="" /></p>
            <p><img src={icon14} alt="" /></p>
            <p><img src={icon15} alt="" /></p>
        </Marquee>
        </div>
        
        </div>
    );
};

export default IconSection;