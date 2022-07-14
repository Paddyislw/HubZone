import React from 'react'
import category01 from '../../media/category-01.png'
import category02 from '../../media/category-02.png'
import category03 from '../../media/category-03.png'
import category04 from '../../media/category-04.png'
import service01 from '../../media/service-01.png'
import service02 from '../../media/service-02.png'
import service03 from '../../media/service-03.png'

export default function MidSection() {
    return (
        <div>
            <div className='flex justify-between mt-20'>
                <div className='bg-red-100 w-[300px] flex rounded text-sm font-bold items-center space-x-2 py-6 px-3 hover:scale-110 transition-all ease-in'>
                    <img src={category01} className='w-14' />
                    <p>Fastfood</p>
                </div>
                <div className='bg-red-100  w-[300px] flex rounded text-sm font-bold items-center space-x-2 py-6 px-3 hover:scale-110 transition-all ease-in'>
                    <img src={category02} className='w-14' />
                    <p>Pizza</p>
                </div>
                <div className='bg-red-100  w-[300px] flex rounded text-sm font-bold items-center space-x-2 py-6 px-3 hover:scale-110 transition-all ease-in'>
                    <img src={category03} className='w-14' />
                    <p>Asian Food</p>
                </div>
                <div className='bg-red-100  w-[300px] flex rounded text-sm font-bold items-center space-x-2 py-6 px-3 hover:scale-110 transition-all ease-in'>
                    <img src={category04} className='w-14' />
                    <p>Row Meal</p>
                </div>
            </div>
            <div className='flex flex-col  items-center mt-32'>
                <p className='text-orange-600 font-semibold text-lg pb-3'>What we serve</p>
                <p className='font-bold text-3xl'>Just sit back at home</p>
                <p className='font-bold text-3xl pb-4'>we will <span className='text-orange-600'>take care</span></p>
                <p className='text-sm text-gray-500'>blablablablablab lablablablablabla lablablablablabla</p>
                <p className='text-sm text-gray-500'>blablablablablab lablablablablabla lablablablablabla</p>
            </div>
            <div className='flex justify-between mt-20'>
                <div className='flex flex-col items-center'>
                    <img src={service01} className='w-24' />
                    <p className='font-bold'>Quick Delivery</p>
                    <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur</p><p className='text-sm text-gray-500'> Molestias aut, repellat ipsum </p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={service02} className='w-24' />
                    <p className='font-bold'>Super Dine In</p>
                    <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur</p><p className='text-sm text-gray-500'> Molestias aut, repellat ipsum </p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={service03} className='w-24' />
                    <p className='font-bold'>Easy Pick Up</p>
                    <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur </p><p className='text-sm text-gray-500'>Molestias aut, repellat ipsum </p>
                </div>
            </div>
        </div>
    )
}
