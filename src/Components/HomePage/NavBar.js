import React from 'react'
import logo from '../../media/logo.png'
import { Link } from 'react-router-dom'
import Drawers from '../Drawer/Drawer'


export default function NavBar() {
    return (
        <div className='sticky top-0 bg-white pb-3 px-48 z-10'>
            <div className='flex justify-between mt-2 '>
                <Link to='/'>
                    <div className='logo flex flex-col items-center mt-1'>
                        <img src={logo} className='w-12' />
                        <p className='font-bold'>Tasty Treat</p>
                    </div>
                </Link>
                <div className='categories flex items-center space-x-12'>
                    <Link to='/'><p className='font-semibold active:text-red-600 text-red-600'>Home</p></Link>
                    <Link to='/foods'>  <p className='font-semibold active:text-red-600 hover:text-red-600'>Foods</p></Link>
                    <Link to='/cart'>  <p className='font-semibold active:text-red-600 hover:text-red-600'>Cart</p></Link>
                    <Link to='/contact'>  <p className='font-semibold active:text-red-600 hover:text-red-600'>Contact</p></Link>
                </div>
                <div className='buttons flex items-center space-x-3'>
                    <Drawers />
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg></button>
                </div>
            </div>
        </div>
    )
}
