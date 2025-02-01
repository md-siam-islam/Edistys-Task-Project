import React from 'react';
import img from "../../assets/navbarimg.svg"

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-[#002045] '>
                <div className='w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-9 gap-4 md:gap-0'>

                <div>
                    <p><img src={img} alt="" /></p>
                </div>

                <div className='flex items-center gap-5'>
                    <p className='text-[#00DADD] font-semibold'>Our Solutions</p>
                    <p className='text-[#00DADD] font-semibold border-l-2 pl-1'>AnyCaas</p>
                    <p className='text-[#00DADD] font-semibold'>AnyPaas</p>
                </div>
                </div>
            </div>

            <div className='bg-[#00152D]'>
                <div className='w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-9 gap-4 md:gap-0'>
                    <div>
                        <p className='text-[#00DADD] font-semibold'>©2023 All rights reserved. Any Technology Pte Ltd.</p>
                    </div>
                    <div>
                        <p className='text-[#00DADD]'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;