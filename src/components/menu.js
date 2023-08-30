import React, { useState } from 'react';
import Image from 'next/image';
import SliderMenu from './sliderMenu.js';
import useHelpCenter from '../../hooks/useHelpCenter.js';

const Menu = () => {
  const {isSliderMenuVisible, handleShowMenu} = useHelpCenter()
  return (
    <>
      <h2 className='flex justify-center text-2xl mt-[590px] font-bold text-[#07074D] font-poppins'>Choose a theme according to your provider constraints:</h2>
      <div className='flex justify-center space-x-9'>
        <div className='bg-white w-[240px] h-[130px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
        <Image
          src='/images/1.jpg'
          width={40}
          height={50}
        />
        <p className='font-poppins text-[#8d8d8d] font-semibold'>General Inquiries</p>
        </div>
        <div className='bg-white w-[240px] h-[130px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
        <Image 
          src='/images/2.jpg'
          width={40}
          height={50}
        />
        <p className='font-poppins text-[#8d8d8d] font-semibold'>Buyer Account</p>
        </div>

        <div className='bg-white w-[240px] h-[130px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8 cursor-pointer hover:bg-[#D6E7FF] transition delay-70'
          onClick={() => handleShowMenu()}>
          <Image 
            src='/images/8.png'
            width={40}
            height={50}
            alt='Selling'
          />
          <p className='font-poppins text-[#8d8d8d] font-semibold'>Selling</p>
        </div>
        </div>
        <div className='flex items-center justify-center space-x-6'>
          <div className='bg-white w-[190px] h-[140px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
          <Image
            src='/images/4.jpg'
            width={40}
            height={50}
          />
          <p className='font-poppins text-[#8d8d8d] font-semibold'>AGM payment</p>
          </div>
          <div className='bg-white w-[190px] h-[140px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
          <Image
            src='/images/5.jpg'
            width={40}
            height={50}
          />
          <p className='font-poppins text-[#8d8d8d] font-semibold text-center justify-center'>Letter of Credit </p>
          <p className='font-poppins text-[#8d8d8d] font-semibold text-center justify-center'>payment</p>
          </div>
          <div className='bg-white w-[190px] h-[140px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
          <Image
            src='/images/6.jpg'
            width={40}
            height={50}
          />
          <p className='font-poppins text-[#8d8d8d] font-semibold text-center justify-center'>Cash Against</p>
          <p className='font-poppins text-[#8d8d8d] font-semibold text-center justify-center'>Document payment</p>
          </div>
          <div className='bg-white w-[190px] h-[140px] flex flex-col items-center justify-center rounded-xl shadow-xl mt-8'>
          <Image
            src='/images/7.jpg'
            width={40}
            height={50}
          />
          <p className='font-poppins text-[#8d8d8d] font-semibold'>Prepaid payment</p>
          </div>

        </div>
      {isSliderMenuVisible && <SliderMenu />}
    </>
  );
}

export default Menu;

