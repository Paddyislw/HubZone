import React from 'react'
import hero from '../../media/hero.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div>
            <div className='flex justify-between pt-20 sm:flex-col sm:items-center'>
                <div className='flex flex-col'>
                    <p className='font-semibold pb-3 text-lg'>Easy way to make an order</p>
                    <p className='text-5xl font-semibold xl:text-4xl lg:text-3xl'><span className='text-red-600'>HUNGRY?</span> Just wait</p>
                    <p className='text-5xl font-semibold pb-5 xl:text-4xl lg:text-3xl'> food at <span className='text-red-600'>your door</span></p>
                    <p className='text-sm text-gray-500 pb-8 xl:w-[400px] lg:w-[300px]'>We have the best quality at the very affordable rate and that too at your door step.</p>    
                    <div className='space-x-7 pb-12'>
                        <Link to='/foods'>
                            <button className='bg-orange-500 border-2 border-orange-500 rounded text-white w-28 py-1 text-sm text-semibold hover:bg-orange-200 hover:text-orange-600 hover:border-orange-200'>Order now</button>
                        </Link>
                        <Link to='/foods'>
                            <button className='border-2 border-orange-500 py-1 rounded text-sm text-semibold w-28 text-orange-600  hover:bg-orange-100 hover:border-orange-100'>See all foods</button>
                        </Link>
                    </div>
                    <div className='flex space-x-7 text-sm font-bold md:space-x-2'>
                        <p>No shipping charge</p>
                        <p>100% secure checkout</p>
                    </div>
                </div>
                <div>
                    <img src={hero} className='w-[500px] 2xl:w-[450px] xl:w-[400px] lg:w-[300px] md:w-[250px] sm:w-[400px]'/>
                </div>
            </div>
        </div>
    )
}
