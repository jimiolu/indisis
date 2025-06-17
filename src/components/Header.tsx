import React from 'react'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import MobileMenu from './MobileNavbar'

const Header = () => {
  return (
    <div>
        {/* Desktop  */}
        <div className='hidden lg:block'>
            <Navbar />
        </div>

        {/* mobile  */}
        <div className='lg:hidden'>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Header