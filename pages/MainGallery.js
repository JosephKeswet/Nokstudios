import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import Gallery from '../components/Gallery'
import Videos from '../components/Videos'
import Footer from '../components/Footer'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import {motion} from 'framer-motion'

const MainGallery = () => {
    const [color,setColor] = useState(true)
    const bgRed = "bg-[#DC5539]"
    const bgGray = "bg-[#F2F2F2]"


    const [show,handleShow] = useState(false);


    // This function toggles the state of the navbar background color
    const transitionNavBar = ()=>{
      if(window.scrollY > 10){
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

  return (
    <div>
        <div>
        <NavBar logo={logoBlack} color={`text-black ${show && 'text-white'}`} navBg={`bg-white ${show && 'bg-black'}`} paddingTop="pt-[1px]" shadow="shadow-md"/>
        </div>
 

      {/* <motion.div layout  > */}
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
        <div className="flex items-center justify-center mt-[51px]">
            <button className={`w-[185px] h-[54px] transition-all duration-1000 ${color? bgRed : bgGray} 
            text-[35px] font-Inter text-center font-medium cursor-pointer z-10`} onClick={() => setColor(true)} >GALLERY</button>
            <button className={`w-[185px] h-[54px] transition-all duration-1000 ${!color? bgRed : bgGray} 
            text-[35px] font-Inter text-center font-medium cursor-pointer z-10`} onClick={() => setColor(false)}>VIDEOS</button>
        </div>
      </motion.div>

        {/* </motion.div> */}
    
        {color? <Gallery/>:<Videos/>}

    </div>
  )
}

export default MainGallery