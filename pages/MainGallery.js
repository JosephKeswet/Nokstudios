import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Photos from '../components/Photos'
import VideoSection from '../components/VideoSection'

const MainGallery = () => {
    const [color,setColor] = useState(true)
    const [tab,setTab] = useState(1)
    const bgRed = "bg-[#DC5539]"
    const bgGray = "bg-[#F2F2F2]"



  return (
    <div>
        <div className='pb-20 lg:pb-48 xl:pb-56'>
        <NavBar logo={logoBlack} logoB={logoWhite}
        colorB='text-white' 
        color='text-black'
        bgBlack='bg-white'
        bgWhite='bg-slate-900'
        paddingTop="pt-[1px]" 
        shadow="shadow-md"/>
        </div>
        <section>
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

    </div>
  )
}

export default MainGallery