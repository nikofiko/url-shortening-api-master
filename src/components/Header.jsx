import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'

const Header = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <div className='pt-[40px] lg:pt-[48px] flex justify-between px-[24px] lg:px-[168px] font-poppins text-[15px] text-grayishviolet font-semibold'>
      {/* desktop menu */}
      <div className='hidden lg:flex items-center gap-[45px]'>
        <img src={logo} alt="" />
        <h2 className='hover:text-black cursor-pointer'>Features</h2>
        <h2 className='hover:text-black cursor-pointer'>Pricing</h2>
        <h2 className='hover:text-black cursor-pointer'>Resources</h2>
      </div>
      <div className='hidden lg:flex items-center gap-[37px]'>
        <h2 className='hover:text-black cursor-pointer'>Login</h2>
        <div className='px-[24px] py-[9px] bg-cyan text-white rounded-full'>
          <button className='cursor-pointer hover:font-bold'>Sing Up</button>
        </div>
      </div>

      {/* mobile menu */}
      <div className='lg:hidden'>
        <img src={logo} alt="" />
      </div>
      <div onClick={() => setVisibility((prev) => !prev)} className='min-w-[24px] flex flex-col gap-[6px] pt-1.5 lg:hidden'>
        <hr className='border-[1.5px]' />
        <hr className='border-[1.5px]' />
        <hr className='border-[1.5px]' />
      </div>

      <div className={`${visibility ? "block" : "hidden"} top-24 flex flex-col gap-[30px] px-[24px] rounded-3xl absolute font-poppins text-[18px] text-white font-semibold bg-darkviolet`}>
        <div className='flex flex-col gap-[30px] items-center'>
          <h2 className='pt-[40px] hover:text-black cursor-pointer'>Features</h2>
          <h2 className='hover:text-black cursor-pointer'>Pricing</h2>
          <h2 className='hover:text-black cursor-pointer'>Resources</h2>
        </div>
        <hr className='text-grayishviolet min-h-[1px] max-w-[279]' />
        <div className='flex flex-col gap-[30px] items-center'>
          <h2 className='hover:text-black cursor-pointer'>Login</h2>
          <div className='mb-[35px] px-[106px] py-[11px] bg-cyan text-white rounded-full'>
            <button className='cursor-pointer hover:font-bold'>Sing Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
