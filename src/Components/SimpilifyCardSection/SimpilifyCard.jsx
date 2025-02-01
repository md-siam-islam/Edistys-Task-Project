import React, { useEffect } from 'react';
import icon1 from '../../assets/Task icon/icon1.svg'
import icon2 from '../../assets/Task icon/icon2.avif'
import icon3 from '../../assets/Task icon/icon3svg.svg'
import AOS from "aos";
import "aos/dist/aos.css";

const SimpilifyCard = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,
        });
      }, []);
    return (
        <div className='my-16'>
            <div className='flex items-center justify-between gap-5 flex-col lg:flex-row'>
                <div data-aos="fade-up" className='bg-blue-50 rounded-3xl p-5'>
                    <div className='flex flex-col items-start space-y-3'>
                        <p>
                            <img src={icon1} alt="" />
                        </p>
                        <h1 className='text-2xl font-bold'>Full-suite solutions</h1>
                        <h1>Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</h1>
                    </div>
                </div>
                <div data-aos="fade-up" className='bg-blue-50 rounded-3xl p-5'>
                    <div className='flex flex-col items-start space-y-3'>
                        <p>
                            <img src={icon2} alt="" />
                        </p>
                        <h1 className='text-2xl font-bold'>Simplify the complex</h1>
                        <h1>Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</h1>
                    </div>
                </div>
                <div  data-aos="fade-up" className='bg-blue-50 rounded-3xl p-5'>
                    <div className='flex flex-col items-start space-y-3'>
                        <p>
                            <img src={icon3} alt="" />
                        </p>
                        <h1 className='text-2xl font-bold'>Cutting-edge tech</h1>
                        <h1>We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpilifyCard;