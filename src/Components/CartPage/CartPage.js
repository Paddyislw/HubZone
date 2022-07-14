import React, { useEffect } from 'react'
import bannerfood from '../../media/bannerfood.jpg'
import { selectCart } from '../../Features/CartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../Features/CartSlice'
import { useState } from 'react'
import { selectTotal } from '../../Features/CartSlice'


export default function CartPage() {
    const cart = useSelector(selectCart)
    console.log(cart)
    console.log('hey')
    const dispatch = useDispatch()
    const deleteHandler = (e) => {
        dispatch(removeProduct(e.target.value))
    }
    const total = useSelector(selectTotal)
    return (
        <div>
            <div>
                <div className='banner h-44  relative bg-gradient-to-tl from-gray-700 to-gray-600'>
                    <img src={bannerfood} className='w-full h-full object-cover mix-blend-overlay absolute ' />
                    <p className='text-white text-5xl font-mono font-bold px-36 py-14'>Cart</p>
                </div>
                <div>
                    {cart.length !== 0 ?
                    <>
                        <div className='flex justify-center p-20 '>
                            <table className='border-[2px] border-black'>
                                <thead className=' border-b-2 border-black'>
                                    <tr className=''>
                                        <th className='py-3 px-6 font-bold'>Image</th>
                                        <th className='py-3 px-6 font-bold'>Title</th>
                                        <th className='py-3 px-6 font-bold'>Price</th>
                                        <th className='py-3 px-6 font-bold'>Quantity</th>
                                        <th className='py-3 px-6 font-bold'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className=' '>
                                    {cart.map((e,i) => {
                                        
                                        return (
                                                <tr className=' text-center border-black border-b ' key={i}>
                                                    <td className='py-4 px-14  border-r-[1px] border-black '><img src={e.image01} className='w-12' /></td>
                                                    <td className='py-4 px-14 font-semibold border-r-[1px] border-black'>{e.title}</td>
                                                    <td className='py-4 px-14 border-r-[1px] border-black'>Rs {e.price}</td>
                                                    <td className='py-4 px-14 border-r-[1px] border-black'>x {e.quantity}</td>
                                                    <td className='py-4 px-14'>
                                                        <button className='border-[1px] border-red-500 text-white bg-red-500 rounded px-6 py-[3px] hover:text-red-600 hover:bg-red-200 hover:border-red-200 '
                                                            onClick={deleteHandler} value={e.id}
                                                        >Delete</button>
                                                    </td>
                                                    
                                                </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                                    
                        </div>
                        <div className='flex justify-center font-bold text-2xl pb-10'>
                            <p>Your total is : Rs <span className='text-red-600'>{total}</span></p>
                        </div>
                        </>
                        : <div className='flex justify-center py-20 text-2xl font-bold'>
                            Your cart is empty
                        </div>}
                </div>
            </div>
        </div>
    )
}
