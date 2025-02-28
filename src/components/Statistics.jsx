import React from 'react'
import brand from '../assets/images/icon-brand-recognition.svg'

const Statistics = () => {
  return (
    <div className='bg-graybg font-poppins lg:px-[168px] relative'>
      <div className='flex items-center flex-col'>
        <h2 className='pb-[18px] text-[28px] lg:text-[48px] leading-[48px] tracking-[-1px] font-bold text-verydarkblue'>Advanced Statistics</h2>
        <p className='pb-[66px] max-w-[327px] lg:max-w-[540px] text-center text-[16px] lg:text-[18px] text-grayishviolet '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      <hr className='hidden lg:block absolute border-4 w-[500px] 3xl:w-[800px] text-cyan top-1/2 left-1/3' />
      <hr className='lg:hidden absolute border-4 h-[500px] text-cyan top-100 left-1/2' />

      <div className='flex gap-[30px] flex-col lg:flex-row items-center lg:items-start 3xl:justify-evenly'>
        <div className='max-w-[350px] bg-white px-[28px] relative max-h-[240px]'>
          <h3 className='text-center lg:text-left pt-[65px] pb-[12px] text-[22px] text-verydarkblue font-bold after:content-[" "] after:bg-darkviolet after:w-[88px] after:h-[88px] after:absolute after:-top-[44px] after:left-[130px] lg:after:left-[32px] after:rounded-full after:bg-[url(src/assets/images/icon-brand-recognition.svg)] after:bg-no-repeat after:bg-center'>Brand Recognition</h3>
          <p className='text-center lg:text-left pb-[41px] max-w-[286px] text-[15px] text-grayishviolet font-medium'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className='max-w-[350px] bg-white px-[28px] relative mt-[44px] max-h-[240px]'>
          <h3 className='text-center lg:text-left pt-[65px] pb-[12px] text-[22px] text-verydarkblue font-bold after:content-[" "] after:bg-darkviolet after:w-[88px] after:h-[88px] after:absolute after:-top-[44px] after:left-[130px] lg:after:left-[32px] after:rounded-full after:bg-[url(src/assets/images/icon-detailed-records.svg)] after:bg-no-repeat after:bg-center'>Detailed Records</h3>
          <p className='text-center lg:text-left pb-[41px] max-w-[286px] text-[15px] text-grayishviolet font-medium'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className='max-w-[350px] bg-white px-[28px] relative mt-[60px] lg:mt-[88px] mb-[120px]'>
          <h3 className='text-center lg:text-left pt-[65px] pb-[12px] text-[22px] text-verydarkblue font-bold after:content-[" "] after:bg-darkviolet after:w-[88px] after:h-[88px] after:absolute after:-top-[44px] after:left-[130px] lg:after:left-[32px] after:rounded-full after:bg-[url(src/assets/images/icon-fully-customizable.svg)] after:bg-no-repeat after:bg-center'>Fully Customizable</h3>
          <p className='text-center lg:text-left pb-[41px] max-w-[286px] text-[15px] text-grayishviolet font-medium'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    
     </div>
  )
}

export default Statistics
