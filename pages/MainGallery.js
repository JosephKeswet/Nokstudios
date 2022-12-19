import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Photos from '../components/Photos'
import VideoSection from '../components/VideoSection'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'



const MainGallery = () => {
    const [color,setColor] = useState(true)
    const [tab,setTab] = useState(1)
    const bgRed = "bg-[#DC5539]"
    const bgGray = "bg-[#F2F2F2]"

    const router = useRouter()
    console.log(router.pathname)
    const getColor = (curr)=>{  
      if (router.pathname === curr) {
        return '#DC5539'
      }
    }
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
  
    const LinkTo = ()=>{
  
      return (
              <Link href='/#services' >
              <motion.li 
              whileTap={{scale: 0.9}}
              className={`hover-underline-animation cursor-pointer text-black`}
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
    <div>
      <section className='min-h-full overflow-y-scroll'>
        <div className='pb-20 lg:pb-48 xl:pb-56'>
        {/* <NavBar logo={logoBlack} logoB={logoWhite}
        colorB='text-white' 
        color='text-black'
        bgBlack='bg-white'
        bgWhite='bg-slate-900'
        paddingTop="pt-[1px]" 
        shadow="shadow-md"/> */}
         <div>
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
        <nav className={` flex  bg-white pt-4  bg-opacity-100 shadow-xl z-50 justify-between px-[20px] pb-[20px] lg:pl-[103px] lg:pr-[106px] w-full fixed   lg:h-[139px] h-[53px] items-center  duration-700   `}>

            <div className={`flex justify-center items-center  w-[80px] h-[50px] lg:w-[124px]  lg:h-[62px]`} >
                <Image src={logoBlack}  alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
            </div>
            {/* <div className='lg:hidden hidden w-[80px] h-[50px] lg:w-[124px]  lg:h-[62px]' >
                <Image src={logo} alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
            </div> */}

            <ul className={`lg:flex hidden justify-between gap-[50px] text-black`}>
  
                <Link href='/' >
                  <motion.li
                    whileTap={{scale: 0.9}}
                  className={`hover-underline-animation cursor-pointer text-black`} style={{color:getColor('/')}}>Home</motion.li>
                </Link>
     
            
                <Link href='/About'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer text-black}`} style={{color:getColor('/About')}}>About Us</motion.li>
                </Link>

              {/* Here i check the path and render a particular component based on the pathname value */}
                {router.pathname == '/'? <ScrollTo/> : <LinkTo />}

 

                <Link href='/MainGallery'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer text-black`} style={{color:getColor('/MainGallery')}}>Our Works</motion.li>
                </Link>


                <Link href='/Contact'>
                <motion.li 
                whileTap={{scale: 0.9}}
                className={`hover-underline-animation cursor-pointer text-black`} style={{color:getColor('/Contact')}}>Contact Us</motion.li>
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
      </div>
        </div>
        <section className='overflow-y-scroll'>
          <div className="flex items-center justify-center  ">
              <button className={`w-[5em] h-[3em] sm:w-[10em] md:w-[12em] lg:w-[12em] transition-all duration-1000 ${color? bgRed : bgGray} 
              text-[0.8em] sm:text-lg lg:text-xl font-Inter text-center font-medium cursor-pointer z-10`} onClick={() =>{
                setColor(true)
                setTab(1)
              }} >GALLERY</button>
              <button className={`w-[5em] h-[3em] sm:w-[10em] md:w-[12em] lg:w-[12em] transition-all duration-1000 ${!color? bgRed : bgGray} 
              text-[0.8em] sm:text-lg lg:text-xl font-Inter text-center font-medium cursor-pointer z-10`} onClick={() => {
                setColor(false)
                setTab(2)
              }}>VIDEOS</button>
          </div>

          <main className='mt-10  '>
            {tab == 1 ? <div>
              <Photos/>
            </div> :
            <div>
              <VideoSection/>
            </div>
            }
          </main>
        </section>
{/*  
      <div className='w-full relative bottom-0  '>
       <Footer/>
       </div> */}
       </section>

    </div>
  )
}

export default MainGallery