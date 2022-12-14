import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

// import '../styles/select.css'

const NavBar = ({logo,logoB,color,paddingTop,shadow,scrollFunc,myRef,colorB,bgWhite,bgBlack,transition}) => {
  const ref = useRef(null);
  const router = useRouter()
  console.log(router.pathname)
  const getColor = (curr)=>{  
    if (router.pathname === curr) {
      return '#DC5539'
    }
  }

  const [show,handleShow] = useState(false);
  const [myIcon,setIcon] = useState();
  const [toggleNav,setToggle] = useState(false)

  const handleToggle = ()=>{
   toggleNav ? setToggle(false) : setToggle(true)
   if (myIcon == faBarsStaggered) {
    setIcon(faBars)
   }else{
    setIcon(faBarsStaggered)
   }
  }


  // This function toggles the state of the navbar background color
  const transitionNavBar = ()=>{
    if(window.scrollY > 700){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }

  // This runs as soon as the component mounts and when the user scrolls down
  useEffect(()=>{
    window.addEventListener("scroll" , transitionNavBar)
    // clean up function
    return ()=> window.removeEventListener("scroll", transitionNavBar)
  },[])






        const LinkTo = ()=>{

          return (
                  <Link href='/#services' >
                  <motion.li 
                  whileTap={{scale: 0.9}}
                  className={`hover-underline-animation cursor-pointer ${color}`}
                  // onCanPlay={handleClick('/')}
                  >Services</motion.li>
                  </Link>
                )
        }

        const ScrollTo = ()=>{
          return  ( <motion.li
                    whileTap={{scale: 0.9}}
                    className={`hover-underline-animation cursor-pointer ${show ? 'text-black' : 'text-white'}`} onClick={scrollFunc}>Services</motion.li>
                    )
                
        }
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
      className='bg-white bg-opacity-100'
      >
        <nav className={`${show && 'nav'} flex   bg-opacity-100  z-50 justify-between px-[20px] pb-[20px] lg:pl-[103px] lg:pr-[106px] w-full fixed pt-6 ${show ? 'shadow-xl' : ''} lg:h-[139px] h-[53px] items-center bg-transparent ${transition} duration-700 `}>

            <div className={`lg:flex justify-center items-center hidden  w-[80px] h-[50px] lg:w-[200px] ${show ? 'pt-4' : 'pt-0'}  lg:h-[62px]`} >
              <Link href='/'>
                <Image src={show ? logo : logoB} alt='logo' width={250} height={200} className='lg:w-[124px]  lg:h-[62px]'/>
              </Link>
            </div>
            <div className='lg:hidden  w-[80px] h-[50px] lg:w-[124px]  lg:h-[62px]' >
                <Image src={logo} alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
            </div>

            <ul className={`lg:flex hidden justify-between gap-[50px] ${show ? colorB : color} `}>
  
                <Link href='/' >
                  <motion.li
                    whileTap={{scale: 0.9}}
                  className={`hover-underline-animation cursor-pointer ${show ? 'text-white' : 'text-black'}`} style={{color:getColor('/')}}>Home</motion.li>
                </Link>
     
            
                <Link href='/About'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer ${show ? 'text-black' : 'text-white'}`} style={{color:getColor('/About')}}>About Us</motion.li>
                </Link>

              {/* Here i check the path and render a particular component based on the pathname value */}
                {router.pathname == '/'? <ScrollTo/> : <LinkTo />}

 

                <Link href='/MainGallery'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer ${show ? 'text-black' : 'text-white'}`} style={{color:getColor('/MainGallery')}}>Our Works</motion.li>
                </Link>


                <Link href='/Contact'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer ${show ? 'text-black' : 'text-white'}`} style={{color:getColor('/Contact')}}>Contact Us</motion.li>
                </Link>
 
            </ul>
        <FontAwesomeIcon onClick={()=> handleToggle()} icon={myIcon ? myIcon : faBars} className='w-[34px] h-[24px] text-[#DC5539] lg:hidden cursor-pointer'/> 
        </nav>
      
        </motion.div>
          <div className={`${!toggleNav && 'hidden'} w-40 h-52 lg:hidden bg-white fixed top-[52px] border-l-8 border-[#DC5539] left-auto right-0 z-50 flex flex-col`}>
            <ul className='text-black text-[20px] font-normal leading-[14px] mt-5'>
              <Link href='/'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Home</li></Link>
              <Link href='/About'><li className='mb-6  cursor-pointer text-right mr-4 hover:text-[#DC5539]'>About</li></Link>
              <Link href='/#services'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Services</li></Link>
              <Link href='/MainGallery'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Our Works</li></Link>
              <Link href='/Contact'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Contact Us</li></Link>
            </ul>
          </div>
    </div>
  )
}

export default NavBar