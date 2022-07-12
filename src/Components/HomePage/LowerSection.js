import React from 'react'
import location from '../../media/location.png'

export default function LowerSection() {
    return (
        <div>
            <div className='flex '>
                <div>
                    <img src={location} className='w-[700px]' />
                </div>
                <div className='flex flex-col pt-10 px-10'>
                    <div>
                        <p className='text-4xl font-bold'>Why <span className='text-orange-500'>Tasty Treat?</span></p>
                        <div className='text-sm text-gray-500 pt-5'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere</p><p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere</p><p>voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                        </div>
                    </div>
                    <div className='mt-10 mb-10'>
                        <p className='font-bold'>Fresh and tasty foods</p>
                        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className='mb-10'>
                        <p className='font-bold'>Quality Support</p>
                        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div>
                        <p className='font-bold'>Order from any location</p>
                        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
