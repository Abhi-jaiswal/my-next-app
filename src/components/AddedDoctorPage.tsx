import React from 'react'
import {doctors} from '../data/data.json'

export const AddedDoctorPage = () => {
  return (
    <div className='bg-[#FAFBFF] w-[84vw] min-h-[84vh] h-[100%] pl-[51px] pt-[36px] mt-[50px] ml-[232.82px]'>
        <div className='text-[22px] text-bold'>
            <p>Doctor Added in the month of october</p>
        </div>

        <div className='mt-[30px]'>
            <table className='bg-white table-auto rounded-lg'>
                <thead>
                    <tr className='border-b border-gray-300'>
                        <td className='w-[250px] px-[10px] py-[12px] items-start'>Doctor Name</td>
                        <td className='w-[160px] px-[10px] py-[12px]'>Doctor ID</td>
                        <td className='w-[240px] px-[10px] py-[12px]'>Email</td>
                        <td className='w-[160px] px-[10px] py-[12px]'>Location</td>
                        <td className='w-[165px] px-[10px] py-[12px]'>Contact Number</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                {
                    doctors.map((item,indx) => (
                        <tr key={indx} className='border-b border-gray-100'>
                            <td className='w-[250px] px-[10px] py-[12px] flex items-center gap-2'>
                                <img src={item.img} alt={item.name} className='w-[35px] h-[35px] rounded-full object-cover'/>
                                {item.name}
                            </td>
                            <td className='w-[160px] px-[10px] py-[12px]'>{item.Id}</td>
                            <td className='w-[240px] px-[10px] py-[12px]'>{item.email}</td>
                            <td className='w-[160px] px-[10px] py-[12px]'>{item.location}</td>
                            <td className='w-[165px] px-[10px] py-[12px]'>{item.contactNo}</td>
                            <td className='w-[165px] px-[10px] py-[12px]'>
                                <div className='bg-[#53564E] py-[5px] px-[7px] rounded-[5px] w-[75%]'>View Profile</div>   
                            </td>   
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    </div>
  )
}
