import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { selectCart } from '../../Features/CartSlice'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import bannerfood from '../../media/bannerfood.jpg'
import products from '../../FakeData'
import { addProduct } from '../../Features/CartSlice'
import { useDispatch } from 'react-redux'

export default function ProductPage() {
    const dispatch = useDispatch()
    const data = products
    const [product, setproduct] = useState(null)
    const param = useParams()
    const [image, setimage] = useState()
    const addHandler = (e) => {
        console.log(e.target.value)
        dispatch(addProduct(e.target.value))
    }

    useEffect(() => {
        data.map((e) => {
            if (e.id == param.id) {
                setproduct(e)
            }
        })
    }, [param.id])

    // console.log(param.id)
    // console.log(`product-${product}`)

    if (product) {
        return (
            <div>
                <div>
                    <div className='banner h-44  relative bg-gradient-to-tl from-gray-700 to-gray-600'>
                        <img src={bannerfood} className='w-full h-full object-cover mix-blend-overlay absolute ' />
                        <p className='text-white text-5xl font-mono font-bold px-36 py-14'>{product.title}</p>
                    </div>
                    <div className='mx-44 flex space-x-10 items-center my-28'>
                        <div className='flex flex-col'>
                            <img src={product.image01} className='w-32' onClick={() => { setimage(product.image01) }} />
                            <img src={product.image02} className='w-32' onClick={() => { setimage(product.image02) }} />
                            <img src={product.image03} className='w-32' onClick={() => { setimage(product.image03) }} />
                        </div>
                        <img src={image ? image : product.image01} className='w-[500px]' />
                        <div className=' '>
                            <p className='text-4xl font-bold pb-2'>{product.title}</p>
                            <p className='text-xl font-semibold pb-1 text-red-500'>Price: Rs <span className='text-red-500'>{product.price}</span></p>
                            <p className='text-lg font-semibold pb-40'>Category: {product.category}</p>
                            <button value={product.id} onClick={addHandler} className='border-[1px] border-red-500 text-white bg-red-500 rounded px-6 py-[3px] hover:text-red-600 hover:bg-red-200 hover:border-red-200' >Add to cart</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
