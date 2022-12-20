import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Pen from '../Assets/logos/Pen.png'
import Angel from '../Assets/img/Angel.svg'
import StreetBoy from '../Assets/img/StreetBoy.svg'
import BoxIcon from '../Assets/logos/BoxIcon.png'
import ConceptArt from '../Assets/img/ConceptArt.png'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
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
    console.log("I ran")
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
          <div className='lg:bg-[url("https://64.media.tumblr.com/64e5d0c2dce58a311067b5bee5933ac8/8cd937f7baab925b-08/s540x810/7f3913654c7f40dd5089bea3c4a100800a7beb9b.gif")] h-[53px] mx-auto lg:h-[781px] bg-cover'>
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
        <div className='z-50'>
          <NavBar logo={logoBlack} logoB={logoWhite} color="text-black md:text-white" colorB='text-white md:text-white' bgBlack='bg-white md:bg-transparent'
          bgWhite='bg-slate-900' transition='transition-all' paddingTop="pt-[25px]" scrollValue='700' scrollFunc={handleClick} myref={ref} />
        </div>
      </motion.div>

          </div>
      </motion.div>

      {/* What we do section */}
    <section className='mt-[60px] lg:mt-0 '>
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
      }} className='text-center text-2xl md:text-3xl mb-[20px] font-Lora sm:text-2xl  lg:text-4xl lg:mt-[35px] lg:mb-[80px]'>What we do</motion.h1>
        <main className='lg:relative lg:h-[1715px]'>

          {/* Angel container */}
            <div className='lg:flex lg:justify-center  lg:gap-[62px] '>
              <div className='hidden lg:inline lg:ml-[70px]'>
                <p className='lg:text-[28px] font-Ubuntu lg:leading-[40px] lg:w-[643px] lg:font-normal lg:pb-[20px]'>From the pen strokes to the mouse clicks, we design and create with an artistic touch.</p>
                <Image src={Pen} alt='Pen Icon' className='lg:w-[144px] lg:h-[144px]'/>
              </div>
              <div
              className='cursor-pointer  lg:w-[641px] lg:h-[906px] w-[326px] h-[221px] sm:w-[426px] md:w-[526px] mx-auto  lg:z-20'
              >
                <Image src={Angel} alt='Angel Art' className='lg:w-[641px] lg:h-[906px] w-[326px] h-[221px] '/>
              </div>
              <div className='lg:hidden w-[320px] sm:w-[420px] mx-auto mt-[280px] sm:mt-[450px] md:mt-[550px]'>
                <div className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] '>
                  <Image src={Pen} alt='Pen Icon' className='w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] '/>
                </div>
                <p className='text-[16px] text-center w-[320px] font-Ubuntu sm:w-[420px] leading-[16px] sm:leading-[20px] sm:text-[20px]  font-normal pb-[20px]'>From the pen strokes to the mouse clicks, we design and create with an artistic touch.</p>
              </div>
            </div>


          {/*Street boy container  */}
            <div className='lg:flex lg:items-end gap-[62px] lg:absolute lg:bottom-[5px]'>
            <div
              className='cursor-pointer   w-[326px] h-[121px] sm:w-[426px] md:w-[526px] mx-auto lg:w-[641px] lg:ml-[70px] lg:h-[1162px] '
              >
              <Image src={StreetBoy} alt='Street Boy Art' className='lg:w-[641px] lg:h-[1162px]'/>
              </div>

              <div className='mt-[530px] sm:mt-[720px] mx-auto w-[320px] sm:w-[420px] md:w-[520px] md:mt-[950px]'>
                  <div className='lg:w-[144px] lg:h-[144px] w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] sm:mb-[10px] '>
                    <Image src={BoxIcon} alt='Box Icon' className='lg:w-[144px] lg:h-[144px]  '/>
                  </div>
                  <p className='text-[16px] sm:text-[20px] sm:w-[400px] md:w-[500px] md:text-[22px] md:leading-[24px] sm:leading-[24px] leading-[18px] text-center lg:text-left  lg:text-[24px] lg:leading-[40px] w-[315px] h-[129px] lg:w-[643px] font-normal lg:pb-[20px] font-Ubuntu'>We bring works to life make imaginations a reality. Watch your dreams unfold and make worlds of your own.</p>
              </div>
            </div>
            
        </main>
      </section>
      {/* This self closing div handles scrolling to the services sectiom */}
      <div id='services' name="services" ref={ref}/> 
      {/* Our services section */}
      <section > 
        <h1 className='text-center font-Lora text-2xl lg:text-4xl lg:mt-[200px] mb-[100px] lg:mb-[200px]'>How may we be of service?</h1>
        <main className='flex flex-wrap gap-40 justify-center '>
          {/* Cards for each service */}
   
          <Cards img={ConceptArt} service="CONCEPT ARTS DESIGN" position="relative"/>
          <Cards img={ConceptArt} service="VFX AND  IMAGEMANIPULATION" position="relative"/>
          <Cards img={ConceptArt} service="MODELLING AND SCULPTING" position="relative"/>
          <Cards img={ConceptArt} service="CHARACTER ANIMATION" position="relative" ml="2xl:ml-[470px]"/>
        </main>
      </section>
    {/* This section houses the BOOK NOW Button */}
      <section className='flex justify-center items-center mt-[80px] lg:mt-[180px] mb-[5em]'>
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
         <Button btnText="BOOK NOW" bgColor="bg-[#DC5539]" fontSize="text-[24px]" width="lg:w-[418px] w-[200px]" height="lg:h-[86px] h-[56px]" textColor="text-white" lineHeight="leading-[28px]" fontWeight="font-bold" 
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
