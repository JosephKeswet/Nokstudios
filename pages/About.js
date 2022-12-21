import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Workspace from '../Assets/logos/workspace.png'
import Warrior1 from '../Assets/img/WarriorDagger.png'
import Warrior2 from '../Assets/img/Warrior.png'
import Charles from '../Assets/img/Charles.png'
import Team1 from '../Assets/img/Team1.png'
// import Vector from '../Assets/img/Vector.png'
import Vector from '../Assets/img/Vector (1).png'
import Image from 'next/image'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import Team from '../components/Team'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'





const About = () => {

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
    <motion.div exit={{
      opacity: 0
    }}> 
      {/* Navbar */}
      {/* <NavBar logo={logoBlack} logoB={logoWhite} color="text-black" colorB='text-white' paddingTop="pt-[1px]" 
      shadow="shadow-md" 
      bgBlack='bg-white'
      bgWhite='bg-slate-900'
      /> */}

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
        <nav className={` flex  bg-white  bg-opacity-100 shadow-xl z-50 justify-between px-[20px] pb-[20px] lg:pl-[103px] lg:pr-[106px] w-full fixed pt-6  lg:h-[139px] h-[53px] items-center  duration-700   `}>

            <div className={`flex justify-center cursor-pointer items-center  w-[80px] h-[50px] lg:w-[124px]  pt-4}  lg:h-[62px]`} >
              <Link href='/'>
                <Image src={logoBlack}  alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
              </Link>
            </div>
            {/* <div className='lg:hidden flex w-[80px] h-[50px] lg:w-[124px]  lg:h-[62px]' >
                <Image src={logoBlack} alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
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
          <div className={`${!toggleNav && 'hidden'} w-40 h-60 lg:hidden bg-white fixed top-[52px] border-l-8 border-[#DC5539] left-auto right-0 z-50 flex flex-col`}>
            <ul className='text-black text-[20px] font-normal leading-[14px] mt-10'>
              <Link href='/'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Home</li></Link>
              <Link href='/About'><li className='mb-6  cursor-pointer text-right mr-4 hover:text-[#DC5539]'>About</li></Link>
              <Link href='/#services'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Services</li></Link>
              <Link href='/MainGallery'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Our Works</li></Link>
              <Link href='/Contact'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Contact Us</li></Link>
            </ul>
          </div>
    </div>
      </div>

      {/* This is the about us section */}
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
            delay: 1
          }
        },
      }}
      className='pt-[150px]'
      >
      <section className='mx-4 lg:mx-0 xl:mx-[140px] '>
      <div className='flex justify-center w-[450px] font-Lora sm:w-[500px] md:w-[500px] lg:w-[900px] xl:w-[1200px]'>
        <h1 className='text-3xl leading-10 mb-20  lg:text-[40px] font-semibold lg:leading-[51px] text-center lg:mt-[83px] lg:mb-[83px]'>About Us</h1>
        </div>

          <main className='mx-auto w-[450px] sm:w-[500px] md:w-[500px] relative  lg:w-[900px] lg:h-[1400px] xl:w-[1200px] xl:h-[1427px]'>
            <div className='w-[450px] mx-auto sm:w-[500px]  md:w-[600px] lg:w-[800px] xl:w-[1200px] lg:flex gap-[59px]'>
                <div className='w-[450px] lg:w-[658px] lg:h-[314px] '>
                  <div className='w-[80px] lg:w-[150px]'>
                      <Image src={Workspace} alt='Workspace Icon' width={300} height={300}/>
                  </div>
                  <p className='md:text-2xl lg:mt-[41px] font-Ubuntu lg:text-[28px] lg:leading-[40px] font-normal lg:h-[314px]'>At Nok Animation Studios, we offer high quality computer generated graphics and art services in the form of VFX as well as animated films, game assets and other 3d services for our clients in different parts of the world using innovative means to ensure our services are highly affordable while maintaining very high qualities.</p>
                </div>
                <div className='mt-6'>
                  <Image src={Warrior1} alt='Game Character' className='w-[543px] h-[830px]'/>
                </div>
            </div>

            <div className='w-[450px] mx-auto mt-6 sm:w-[450px] md:w-[550px] lg:w-[550px] lg:mt-40 xl:w-[650px] xl:absolute xl:bottom-1 '>
              <Image src={Warrior2} alt='Game Character' />
            </div>

          </main>

      </section>
      <section>
      {/* This is the meet the team section */}
      <div className='flex justify-center w-[500px] sm:w-[900px] lg:w-full'>
        <h1 className='mt-28 text-center mb-12 text-2xl lg:text-4xl lg:mt-48 font-Lora  xl:text-[40px] font-semibold xl:leading-[51px] xl:text-center text-[#292929] xl:mt-[80px] xl:mb-[60px]'>Meet the team</h1>
        </div>
        <div className='w-[500px] sm:w-[900px] lg:w-full  bg-[#FAF7F7] h-auto xl:pb-36 '>
          <div className='w-[30em]  flex flex-wrap justify-center mx-auto pb-12 sm:w-[39em] sm:flex sm:flex-wrap sm:justify-center  md:w-[50em]  lg:w-[60em] xl:w-[80em] lg:flex lg:flex-wrap lg:justify-center gap-10 '>
            <Team bgImg="bg-[url('../Assets/img/Charles.png')]"/>
            <Team bgImg="bg-[url('../Assets/img/Charles.png')]"/>
            <Team bgImg="bg-[url('../Assets/img/Charles.png')]"/>
            <Team bgImg="bg-[url('../Assets/img/Charles.png')]"/>
          </div>
        </div>
      </section>


      </motion.div>

      <footer className='w-[500px] sm:w-[900px] lg:w-full mt-12'>
        <Footer/>
      </footer>

    </motion.div>
  )
}

export default About