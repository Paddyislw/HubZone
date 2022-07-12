import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Components/HomePage/NavBar';
import Footer from '../Components/HomePage/Footer';

export default function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />

    </>
  )
}
