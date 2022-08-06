import React from 'react'
import bannerfood from '../../media/bannerfood.jpg'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
    return (
        <div>
            <div className='banner h-44  relative bg-gradient-to-tl from-gray-700 to-gray-600'>
                <img src={bannerfood} className='w-full h-full object-cover mix-blend-overlay absolute ' />
                <p className='text-white text-5xl font-mono font-bold px-36 py-14'>SignUp</p>
            </div>
            <div className='my-32'>
                <div className='flex justify-center items-center flex-col bg-red-100 w-[350px] mx-auto pt-10  rounded-md'>
                    <input type='text' placeholder='First Name' className='bg-red-100  focus:outline-none border-b-2 border-gray-400 py-2 my-1' />
                    <input type='text' placeholder='Last Name' className='bg-red-100  focus:outline-none border-b-2 border-gray-400 py-2 my-1' />
                    <input type='text' placeholder='Email or UserName' className='bg-red-100  focus:outline-none border-b-2 border-gray-400 py-2 my-1' />
                    <input type='password' placeholder='Password' className='bg-red-100 focus:outline-none border-b-2 border-gray-400 py-2 mb-10 my-1' />
                    <button className='border-[1px] border-red-500 text-white bg-red-500 rounded px-6 py-[3px] hover:text-red-100 hover:bg-red-600 hover:border-red-200 mb-10'>Log In</button>
                </div>
            <Link to='/login'><p className='text-center my-2 text-blue-700 hover:text-blue-900'>Already have an account? Login</p></Link>
            </div>
        </div>
    )
}
