import React from 'react'
import hero from '../assets/images/illustration-working.svg'

const Hero = () => {
  return (
    <div className='relative font-poppins lg:px-[165px] px-[24px] pb-10'>
      <div className='lg:block flex flex-col items-center'>
        <h1 className='pt-[397px] lg:pt-[139px] font-bold text-[42px] lg:text-[68px] max-w-[565px] leading-[48px] lg:leading-[75px] tracking-tighter text-verydarkblue text-center lg:text-left'>More than just shorter links</h1>
        <p className='text-center lg:text-left pt-[5px] text-grayishviolet text-[18px] max-w-[540px]'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <div className='mb-[88px] lg:mb-[138px] mt-[38px] text-center px-[24px] py-[11px] bg-cyan text-white rounded-full max-w-[160px]'>
          <button className='cursor-pointer hover:font-bold font-bold'>Get Started</button>
        </div>

      </div>
      <div className='overflow-hidden -z-10 max-w-[500px] lg:max-w-none lg:max-h-[482px] absolute top-[20px] lg:top-[70px] 3xl:right-60 -right-37'>
        <img className="" src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
