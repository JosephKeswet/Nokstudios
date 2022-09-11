import React, { useState } from 'react'
import NavBar from './NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import Image1 from '../Assets/img/Image1.png'
import Image2 from '../Assets/img/Image2.png'
import Image3 from '../Assets/img/Image3.png'
import Image4 from '../Assets/img/Image4.png'
import Image5 from '../Assets/img/Image5.png'
import Image6 from '../Assets/img/Image6.png'
import Image7 from '../Assets/img/Image7.png'
import Image8 from '../Assets/img/Image8.png'
import Image9 from '../Assets/img/Image9.png'
import Image10 from '../Assets/img/Image10.png'
import Image from 'next/image'
import Footer from './Footer'
import {motion} from 'framer-motion'




const Gallery = () => {


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
            delay: .4
          }
        },
      }}
      >
      <main className='relative mt-[149px] mx-[45px]'>


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
                     delay: .5
                  }
               },
               }}
               >
               <div className='absolute top-1'>
                  <Image src={Image1} alt='Gallery Image'/>
               </div>
               </motion.div>


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
                     delay: .55
                  }
               },
               }}
               >
               <div className='absolute left-[460px] top-1'>
                  <Image src={Image2} alt='Gallery Image'/>
               </div>
               </motion.div>



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
                     delay: .57
                  }
               },
               }}
               >
                  <div className='absolute left-[963.4px] top-[5px]'>
                  <Image src={Image3} alt='Gallery Image'/>
               </div>
               </motion.div>



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
                     delay: .59
                  }
               },
               }}
               >
               <div className='absolute left-[460px] top-[263px]'>
                  <Image src={Image4} alt='Gallery Image'/>
               </div>
               </motion.div>



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
                     delay: .61
                  }
               },
               }}
               >
               <div className='absolute top-[536px]'>
                  <Image src={Image5} alt='Gallery Image'/>
               </div>
               </motion.div>


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
                     delay: .63
                  }
               },
               }}
               >

               <div className='absolute left-[464px] top-[536px]'>
                  <Image src={Image6} alt='Gallery Image'/>
               </div>
               </motion.div>


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
                     delay: .65
                  }
               },
               }}
               >

               <div className='absolute left-[963px] top-[264px]'>
                  <Image src={Image7} alt='Gallery Image'/>
               </div>
               </motion.div>


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
                     delay: .67
                  }
               },
               }}
               >
               <div className='absolute top-[809px]'>
                  <Image src={Image8} alt='Gallery Image'/>
               </div>
               </motion.div>



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
                     delay: .69
                  }
               },
               }}
               >
               <div className='absolute top-[809px] left-[460px]'>
                  <Image src={Image9} alt='Gallery Image'/>
               </div>
               </motion.div>


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
                     delay: .71
                  }
               },
               }}
               >
               <div className='absolute top-[808px] left-[963px]'>
                  <Image src={Image10} alt='Gallery Image'/>
               </div>
               </motion.div>


    </main>
    </motion.div>
   <div className='relative top-[1300px]'>
    <Footer/>    
    </div>
    
    </div>
  )
}

export default Gallery