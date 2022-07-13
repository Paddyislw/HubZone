import React, { useEffect } from 'react'
import bannerfood from '../../media/bannerfood.jpg'
import products from '../../FakeData'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import Product from '../HomePage/Product'

export default function AllFoodsPage() {
    const pages = 2
    const [start, setstart] = useState(0)
    const [end, setend] = useState(10)
    const [pageNo, setpageNo] = useState(1)
    const [data, setdata] = useState(products.slice(start, end))


    const onPageChange = (e) => {
        if (e.selected === 1) {
            setstart(e.selected * 10)
            setend(14)
        }
        else {
            setstart(e.selected * 10)
            setend((e.selected * 10) + 10)
        }

        console.log('hey')
        console.log(e.selected)
    }
    useEffect(() => {
        setdata(products.slice(start, end))
        console.log(start)
        console.log(data)
    }, [start])
    return (
        <div className='bg-gray-50'>
            <div>
                {/* */}
                {/*Banner */}
                <div className='banner h-44  relative bg-gradient-to-tl from-gray-700 to-gray-600'>
                    <img src={bannerfood} className='w-full h-full object-cover mix-blend-overlay absolute ' />
                    <p className='text-white text-5xl font-mono font-bold px-36 py-14'>All Foods</p>
                </div>





                {/* Main Data  */}
                <div className='mx-[150px] mt-20'>
                    <input className='border-2 mb-10 w-[350px] px-3 py-2 rounded' placeholder='what are you looking for ? '/>
                    <div className='grid grid-cols-4 '>

                        {data.map((e, i) => {
                            return (
                                <div key={i}>
                                    <Product price={e.price} img={e.image01} name={e.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>






                {/*Paginate */}
                <div className='my-10'>
                    <ReactPaginate
                        pageCount={pages}
                        onPageChange={onPageChange}
                        className='flex justify-center space-x-2 items-center'
                        pageLinkClassName='bg-red-500 text-white rounded px-5 py-1'
                        previousLinkClassName='bg-red-500 text-white rounded py-1 px-5'
                        nextLinkClassName='bg-red-500 text-white rounded py-1 px-5'
                    />
                </div>
            </div>
        </div>
    )
}
