import React from 'react'
import network from '../../media/network.png'


export default function Bottom() {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='splide flex flex-col'>
                    <p className='text-orange-600 text-xl font-semibold'>Testimonial</p>
                    <p className='text-4xl font-bold pb-6 '>What our <span className='text-orange-600'>customers</span> are saying</p>
                    <div className='font-sm text-gray-500 my-2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in</p>
                        <p>us nulla. Donec laoreet in quam et malesuada. Aenean tincidunt</p>
                        <p>at pulvinar vehicula, dolor elit bibendum libero, sed ullamcorper </p>
                        <p>tortor porttitor. Integer sit amet ante a</p>
                        <p>-louis</p>
                    </div>
                    <div className='font-sm text-gray-500 my-2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in</p>
                        <p>us nulla. Donec laoreet in quam et malesuada. Aenean tincidunt</p>
                        <p>at pulvinar vehicula, dolor elit bibendum libero, sed ullamcorper </p>
                        <p>tortor porttitor. Integer sit amet ante a</p>
                        <p>-louis</p>
                    </div>
                    <div className='font-sm text-gray-500 my-2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in</p>
                        <p>us nulla. Donec laoreet in quam et malesuada. Aenean tincidunt</p>
                        <p>at pulvinar vehicula, dolor elit bibendum libero, sed ullamcorper </p>
                        <p>tortor porttitor. Integer sit amet ante a</p>
                        <p>-louis</p>
                    </div>


                </div>
                <div className='flex flex-col'>
                    <img src={network} className='w-[700px]' />
                </div>
            </div>
        </div>
    )
}
