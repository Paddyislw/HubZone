import React from 'react'
import logo from '../../media/logo.png'

export default function Footer() {
    return (
        <div className='bg-red-200 flex flex-col'>
            <div className='flex mx-36 justify-between 2xl:mx-20 xl:mx-10 flex-wrap '>
                
                    <div className='flex flex-col mt-16 '>
                        <img src={logo} className='w-16' />
                        <p className='font-bold text-lg pb-4'>HubZone</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>adipiscing elit. Nesciunt pariatur accusamus</p>
                    </div>
                    <div className='flex flex-col mt-16'>
                        <p className='text-lg font-bold pb-3'>Delivery Time</p>
                        <p className='font-bold'>Sunday-Thursday</p>
                        <p className='pb-5'>10:00am-11:00pm</p>
                        <p className='font-bold'>Friday-Saturday</p>
                        <p>9:00am-11:30pm</p>
                    </div>
              
                
                    <div className='flex flex-col mt-16 '>
                        <p className='text-lg font-bold pb-3'>Contact</p>
                        <p>Location: Banglore,IndraNagar 560012</p>
                        <p className='pb-5'>India</p>
                        <p className='font-bold'>Phone: 328109382</p>
                        <p className='font-bold'>Email: therewego@gmail.com</p>
                    </div>
                    <div className='flex flex-col mt-16 '>
                        <p className='text-lg font-bold'>NewsLetter</p>
                        <p className='pb-2'>Subscribe to our newsLetter</p>
                        <input className='border-[1px] border-black rounded text-sm py-2 w-72 px-3' placeholder='Enter your email' />
                    </div>
               
            </div>
            <div className='mx-36 mt-20 mb-4 text-sm text-red-700 2xl:mx-20 xl:mx-10 lg:mx-5 '>
                <p>Copyright - 2022, website made by Pradyum Singh . All rights reserverd</p>
            </div>
        </div>
    )
}
