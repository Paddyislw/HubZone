import React from 'react'
import BottomSection from './LowerSection'
import LandingPage from './LandingPage'
import MenuSection from './MenuSection'
import MidSection from './MidSection'
import NavBar from './NavBar'
import Footer from './Bottom'

export default function HomePage() {
    return (
        <div className='bg-gray-50'>
            
            <div className='mx-48 bg-gray-50'>
                <LandingPage />
                <MidSection />
                <MenuSection />
                <BottomSection />
                <Footer />
            </div>
        </div>
    )
}
