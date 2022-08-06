import React, { useEffect } from 'react'
import products from '../../FakeData'
import pizza from '../../media/pizza.png'
import hamburger from '../../media/hamburger.png'
import bread from '../../media/bread.png'
import Product from './Product'
import { useState } from 'react'

export default function MenuSection() {
  const [category, setcategory] = useState('all')
  const [data, setdata] = useState(products)
  const [openTab, setopenTab] = useState(1)
  const activeClass = 'text-red-600 bg-white rounded flex items-center px-5 py-1'
  const inActiveClass = 'text-white flex items-center'
  useEffect(() => {
    if (category == 'all') {
      setdata(products)
    }
    if (category == 'Burger') {
      setdata(products.filter((e) => {
        if (e.category == 'Burger') {
          return true
        }
      })
      )
    }
    if (category == 'Pizza') {
      setdata(products.filter((e) => {
        if (e.category == 'Pizza') {
          return true
        }
      })
      )
    }
    if (category == 'Bread') {
      setdata(products.filter((e) => {
        if (e.category == 'Bread') {
          return true
        }
      })
      )
    }
  }, [category])
  //console.log(data)
  return (
    <div className=''>
      <div className='flex justify-center mt-20 flex-col  mx-auto'>
        <p className='text-3xl font-bold'>Popular Foods</p>
        <div className='flex space-x-32 bg-red-500 rounded px-5 py-4 mt-10  justify-center  w-full lg:space-x-10 lg:max-w-[700px] sm:text-xs sm:space-x-5 mx-auto'>
          <button className={openTab===1?activeClass:inActiveClass} onClick={() => {
            setcategory('all')
            setopenTab(1)
          }}>All</button>
          <button className={openTab===2?activeClass:inActiveClass} onClick={() => {
            setcategory('Burger')
            setopenTab(2)
          }}><img className='w-10 mr-2 sm:w-6' src={hamburger} />Burger</button>
          <button className={openTab===3?activeClass:inActiveClass} onClick={() => {
            setcategory('Pizza')
            setopenTab(3)
          }}><img className='w-10 mr-2 sm:w-6' src={pizza} />Pizza</button>
          <button className={openTab===4?activeClass:inActiveClass} onClick={() => {
            setcategory('Bread')
            setopenTab(4)
          }}><img className='w-10 mr-2 sm:w-6' src={bread} />Bread</button>
        </div>
        <div className='grid grid-cols-4 mt-10 mb-20  2xl:grid-cols-3 lg:grid-cols-2 '>
          {data.map((e, i) => {
            return (
              <div key={i} className=''>
                <Product price={e.price} img={e.image01} name={e.title} id={e.id} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
