import React from 'react'

export const Navbar = () => {
  return (
    <div className=" bg-[#FFFFFF] h-[50px] w-[85vw] px-[28.8px] flex text-sm justify-between items-center fixed top-0 left-[232.82px]">
        <div className='flex h-[17.83px] w-[86.06px] gap-4'>
            <img src='/assets/search.png' alt='search'/>
            <input placeholder='Search...'></input>
        </div>
        <div className='flex h-[28.07px] gap-8'>
            <div className='flex h-[20px] gap-6 items-center justify-center'>
                <img src="/assets/bell.png" className='h-[20px]'/>
                <img src="/assets/support.png" className='h-[20px]'/>
            </div>
            <div className='flex h-[30.82px] w-[2px] bg-[#26323C]'> </div>
            <div className='flex justify-center gap-5 items-center'>
                <img src='/assets/userPic.png' className='h-[30px]' />
                <div>
                    <p className='text-bold'>Admin Name</p>
                    <p className='text-[10px]'>Staff</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
