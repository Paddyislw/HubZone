import React from 'react'
import hero from '../../media/hero.png'

export default function LandingPage() {
    return (
        <div>
            <div className='flex justify-between pt-20'>
                <div className='flex flex-col'>
                    <p className='font-semibold pb-3 text-lg'>Easy way to make an order</p>
                    <p className='text-5xl font-semibold'><span className='text-orange-600'>HUNGRY?</span> Just wait</p>
                    <p className='text-5xl font-semibold pb-5'> food at <span className='text-orange-600'>your door</span></p>
                    <p className='text-sm text-gray-500 pb-8'>We have the best quality at the very affordable rate and that too at your door step.</p>
                    <div className='space-x-7 pb-12'>
                        <button className='bg-orange-500 border-2 border-orange-500 rounded text-white w-28 py-1 text-sm text-semibold hover:bg-orange-200 hover:text-orange-600 hover:border-orange-200'>Order now</button>
                        <button className='border-2 border-orange-500 py-1 rounded text-sm text-semibold w-28 text-orange-600  hover:bg-orange-100 hover:border-orange-100'>See all foods</button>
                    </div>
                    <div className='flex space-x-7 text-sm font-bold'>
                        <p>No shipping charge</p>
                        <p>100% secure checkout</p>
                    </div>
                </div>
                <div>
                    <img src={hero} className='w-[500px]'/>
                </div>
            </div>
        </div>
    )
}
