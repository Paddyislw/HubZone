import React from 'react'
import bannerfood from '../../media/bannerfood.jpg'
import { selectCart } from '../../Features/CartSlice'
import { useSelector } from 'react-redux'


export default function CartPage() {
    const cart = useSelector(selectCart)
    console.log(cart)
    console.log('hey')
    return (
        <div>
            <div>
                <div className='banner h-44  relative bg-gradient-to-tl from-gray-700 to-gray-600'>
                    <img src={bannerfood} className='w-full h-full object-cover mix-blend-overlay absolute ' />
                    <p className='text-white text-5xl font-mono font-bold px-36 py-14'>Cart</p>
                </div>
                <div>
                    {cart.length !== 0 ?
                        <div className='flex justify-center p-20'>
                            <table className='border-[1px] border-black'>
                                <thead className='border-b border-black'>
                                    <tr className=''>
                                        <th className='py-3 px-6'>Image</th>
                                        <th className='py-3 px-6'>Title</th>
                                        <th className='py-3 px-6'>Price</th>
                                        <th className='py-3 px-6'>Quantity</th>
                                        <th className='py-3 px-6'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className='border-black border-[1px]'>
                                    {cart.map((e) => {
                                        return (
                                            <tr className='border-b text-center'>
                                                <td className='py-4 px-6'><img src={e.image01} className='w-12'/></td>
                                                <td className='py-4 px-6'>{e.title}</td>
                                                <td className='py-4 px-6'>Rs {e.price}</td>
                                                <td className='py-4 px-6'>{e.quantity}</td>
                                                <td className='py-4 px-6'><button>Delete</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        : <p>Your cart is empty</p>}
                </div>
            </div>
        </div>
    )
}
