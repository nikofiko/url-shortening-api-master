import React from 'react'

const Boost = () => {
  return (
    <div className='bg-darkviolet font-poppins flex flex-col items-center bg-[url(src/assets/images/bg-boost-mobile.svg)] lg:bg-[url(src/assets/images/bg-boost-desktop.svg)] lg:bg-center'>
      <h3 className='pt-[57px] text-[28px] lg:text-[40px] text-white font-bold tracking-tighter'>Boost your links today</h3>
      <div className='mb-[70px] lg:mb-[50px] mt-[38px] text-center px-[28px] py-[11px] bg-cyan text-white rounded-full max-w-[160px]'>
        <button className='cursor-pointer hover:font-bold font-bold'>Get Started</button>
      </div>
    </div>
  )
}

export default Boost
