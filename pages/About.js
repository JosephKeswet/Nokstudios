import React from 'react'
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




const About = () => {
  return (
    <motion.div exit={{
      opacity: 0
    }}> 
      {/* Navbar */}
      <NavBar logo={logoBlack} logoB={logoWhite} color="text-black" colorB='text-white' paddingTop="pt-[1px]" 
      shadow="shadow-md" 
      bgBlack='bg-white'
      bgWhite='bg-slate-900'
      />

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
      <div className='flex justify-center w-[450px] sm:w-[500px] md:w-[500px] lg:w-[900px] xl:w-[1200px]'>
        <h1 className='text-3xl leading-10 mb-20  lg:text-[40px] font-semibold lg:leading-[51px] text-center lg:mt-[83px] lg:mb-[83px]'>About Us</h1>
        </div>

          <main className='mx-auto w-[450px] sm:w-[500px] md:w-[500px] relative  lg:w-[900px] lg:h-[1400px] xl:w-[1200px] xl:h-[1427px]'>
            <div className='w-[450px] mx-auto sm:w-[500px]  md:w-[600px] lg:w-[800px] xl:w-[1200px] lg:flex gap-[59px]'>
                <div className='w-[450px] lg:w-[658px] lg:h-[314px] '>
                  <div className='w-[80px] lg:w-[150px]'>
                      <Image src={Workspace} alt='Workspace Icon' width={300} height={300}/>
                  </div>
                  <p className='md:text-2xl lg:mt-[41px] lg:text-[28px] lg:leading-[40px] font-normal lg:h-[314px]'>At Nok Animation Studios, we offer high quality computer generated graphics and art services in the form of VFX as well as animated films, game assets and other 3d services for our clients in different parts of the world using innovative means to ensure our services are highly affordable while maintaining very high qualities.</p>
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
        <h1 className='mt-28 text-center mb-12 text-2xl lg:text-4xl lg:mt-48  xl:text-[40px] font-semibold xl:leading-[51px] xl:text-center text-[#292929] xl:mt-[80px] xl:mb-[60px]'>Meet the team</h1>
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