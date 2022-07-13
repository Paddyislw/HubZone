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
  useEffect(()=>{
    if(category=='all'){
      setdata(products)
    }
    if(category=='Burger'){
      setdata( products.filter((e)=>{
        if(e.category=='Burger'){
          return true
        }
      })
      )
    }
    if(category=='Pizza'){
      setdata( products.filter((e)=>{
        if(e.category=='Pizza'){
          return true
        }
      })
      )
    }
    if(category=='Bread'){
      setdata( products.filter((e)=>{
        if(e.category=='Bread'){
          return true
        }
      })
      )
    }
  },[category])
  console.log(data)
  return (
    <div className=''>
        <div className='flex justify-center mt-20 flex-col items-center w-[1250px] mx-auto'>
            <p className='text-3xl font-bold'>Popular Foods</p>
            <div className='flex space-x-32 bg-red-500 rounded px-5 py-4 mt-10  justify-center text-white w-full'>
              <button onClick={()=>{setcategory('all')}}>All</button>
              <button className='flex items-center' onClick={()=>{setcategory('Burger')}}><img className='w-10 mr-2' src={hamburger}/>Burger</button>
              <button className='flex items-center' onClick={()=>{setcategory('Pizza')}}><img className='w-10 mr-2' src={pizza}/>Pizza</button>
              <button className='flex items-center' onClick={()=>{setcategory('Bread')}}><img className='w-10 mr-2' src={bread}/>Bread</button>
            </div>
            <div className='grid grid-cols-4 mt-10 mb-20  space-x-3 grid-flow-row'>
              {data.map((e,i)=>{
                return(
                  <div key={i} className=''>
                  <Product price={e.price} img={e.image01} name={e.title}/>
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}
