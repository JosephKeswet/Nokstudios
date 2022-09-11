import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const NavBar = ({logo,color,paddingTop,shadow,scrollFunc}) => {
  return (
    <div >
          <motion.div initial='hidden' animate='visible'
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .7
          }
        },
      }}
      >
        <nav className={`flex justify-between pl-[103px] pr-[106px] ${paddingTop} ${shadow}  items-center  z-10`}>

            <div>
                <Image src={logo} alt='logo' className='w-[124px] h-[62px]'/>
            </div>

            <ul className={`flex justify-between gap-[50px] ${color}`}>
                <Link href='/'>
                  <li className='cursor-pointer'>Home</li>
                </Link>
                <Link href='/About'>
                <li className='cursor-pointer'>About Us</li>
                </Link>
                {/* <Link href='/Services'> */}
                <li className='cursor-pointer' onClick={scrollFunc}>Services</li>
                {/* </Link> */}
                <Link href='/MainGallery'>
                <li className='cursor-pointer'>Our Works</li>
                </Link>
                <Link href='/Contact'>
                <li className='cursor-pointer'>Contact Us</li>
                </Link>
 
            </ul>

        </nav>
        </motion.div>
    </div>
  )
}

export default NavBar