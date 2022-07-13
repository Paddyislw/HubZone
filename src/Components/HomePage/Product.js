import React from 'react'

export default function Product(props) {
  return (
    <div>
        <div className='flex flex-col items-center border-[1px] border-gray-200 rounded w-[300px]  mb-8'>
            <img src={props.img} className='w-28 py-4 hover:scale-125 transition-all '/>
            <p className='font-semibold pb-3'>{props.name}</p>
            <div className='flex justify-between w-60 py-6'>
                <p className='text-lg font-bold text-red-600'>Rs {props.price}</p>
                <button className='w-32 rounded bg-red-500 border-2 border-red-500 text-white py-1'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
