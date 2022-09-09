import Image from 'next/image'
import React from 'react'

const NavBar = ({logo,color,paddingTop,shadow}) => {
  return (
    <div >
        <nav className={`flex justify-between pl-[103px] pr-[106px] ${paddingTop} ${shadow}  items-center `}>

            <div>
                <Image src={logo} alt='logo' className='w-[124px] h-[62px]'/>
            </div>

            <ul className={`flex justify-between gap-[50px] ${color}`}>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Works</li>
                <li>Contact Us</li>
            </ul>

        </nav>
    </div>
  )
}

export default NavBar