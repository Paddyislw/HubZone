import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Components/HomePage/NavBar';
import Footer from '../Components/HomePage/Footer';
import AllFoodsPage from '../Components/FoodsPage/AllFoodsPage';
import ContactPage from '../Components/ContactPage/ContactPage';
import CartPage from '../Components/CartPage/CartPage';
import ProductPage from '../Components/ProductPage/ProductPage';

export default function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path ='/foods' element={<AllFoodsPage/>}/>
        <Route path ='/contact' element={<ContactPage/>}/>
        <Route path ='/cart' element={<CartPage/>}/>
        <Route path ='/product/:id' element={<ProductPage/>}/>
      </Routes>
      <Footer />

    </>
  )
}
