import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Pen from '../Assets/logos/Pen.png'
import Angel from '../Assets/img/Angel.svg'
import StreetBoy from '../Assets/img/StreetBoy.svg'
import BoxIcon from '../Assets/logos/BoxIcon.png'
import ConceptArt from '../Assets/img/ConceptArt.png'
import Cards from '../components/Cards'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import {motion,useScroll} from 'framer-motion'
import React, { useRef } from 'react'




export default function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  // const { scrollYProgress } = useScroll();
  return (
    <motion.div exit={{
      opacity: 0
    }}>
      {/* This is my nav */}
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
            delay: .4
          }
        },
      }}
      >
          <div className='bg-[url("https://64.media.tumblr.com/64e5d0c2dce58a311067b5bee5933ac8/8cd937f7baab925b-08/s540x810/7f3913654c7f40dd5089bea3c4a100800a7beb9b.gif")] h-[781px] bg-cover'>
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
          <NavBar logo={logoWhite} color="text-white" paddingTop="pt-[25px]" scrollFunc={handleClick} />
      </motion.div>

          </div>
      </motion.div>

      {/* What we do section */}
    <section className='mx-[100px]'>
        <motion.h1 initial='hidden' animate='visible'
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1
          }
        },
      }} className='text-center text-4xl mt-[17px] mb-[80px]'>What we do</motion.h1>
        <main className='relative h-[1715px]'>

          {/* Angel container */}
            <div className='flex gap-[62px] '>
              <div>
                <p className='text-[28px] leading-[40px] w-[643px] font-normal pb-[20px]'>From the pen strokes to the mouse clicks, we design and create with an artistic touch.</p>
                <Image src={Pen} alt='Pen Icon' className='w-[144px] h-[144px] animate-pulse'/>
              </div>
              <motion.div 
              // whileHover={{
              //   scale: 1.01,
              //   transition: {
              //     duration: .2
              //   }
              // }}
              whileTap={{scale: 0.9}}
              className='cursor-pointer drop-shadow-lg hover:drop-shadow-2xl  z-20'
              >
                <Image src={Angel} alt='Angel Art' className='w-[641px] h-[906px] '/>
              </motion.div>
            </div>


          {/*Street boy container  */}
            <div className='flex items-end gap-[62px] absolute bottom-[5px]'>
            <motion.div 
            // whileHover={{
            //     scale: 1.01,
            //     transition: {
            //       duration: .2
            //     }
            //   }}
              whileTap={{scale: 0.9}}
              className='cursor-pointer drop-shadow-lg hover:drop-shadow-2xl '
              >
              <Image src={StreetBoy} alt='Angel Art' className='w-[641px] h-[1162px]'/>
              </motion.div>

              <div>
                  <Image src={BoxIcon} alt='Box Icon' className='w-[144px] h-[144px] animate-pulse '/>
                  <p className='text-[28px] leading-[40px] w-[643px] font-normal pb-[20px]'>We bring works to life make imaginations a reality. Watch your dreams unfold and make worlds of your own.</p>
              </div>
            </div>
            
        </main>

      </section>

      {/* Our services section */}
      <section ref={ref}>
        <h1 className='text-center text-4xl mt-[200px] mb-[200px]'>How may we be of service?</h1>
        <main className='flex flex-wrap gap-[90px] mx-[96px]'>
          {/* Cards for each service */}
   
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative" ml="ml-[470px]"/>
        </main>
      </section>
    {/* This section houses the BOOK NOW Button */}
      <section className='flex justify-center items-center mt-[180px] mb-[265px]'>
         {/* <Link href='/Book'> */}
         <motion.div 
              // whileHover={{
              //   scale: 1.01,
              //   transition: {
              //     duration: .2
              //   }
              // }}
              whileTap={{scale: 0.9}}
              className='cursor-pointer  hover:drop-shadow-xl'
              >
         <Button btnText="BOOK NOW" bgColor="bg-[#DC5539]" fontSize="text-[24px]" width="w-[418px]" height="h-[86px]" textColor="text-white" lineHeight="leading-[28px]" fontWeight="font-bold" 
         routeFunc={() => Router.push('/Book')}/>
         </motion.div>
         {/* </Link>  */}
      </section>

      {/* This contains the footer */}

      <footer>
        <Footer/>
      </footer>
    </motion.div>
  )
}
