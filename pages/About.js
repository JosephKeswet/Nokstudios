import React from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import Workspace from '../Assets/logos/workspace.png'
import Warrior1 from '../Assets/img/WarriorDagger.png'
import Warrior2 from '../Assets/img/Warrior.png'
import Team1 from '../Assets/img/Team1.png'
import Vector from '../Assets/img/Vector.png'
import Image from 'next/image'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'



const About = () => {
  return (
    <motion.div exit={{
      opacity: 0
    }}> 
      {/* Navbar */}
      <NavBar logo={logoBlack} color="text-black" paddingTop="pt-[1px]" shadow="shadow-md"/>

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
      >
      <section className='mx-[140px]'>

        <h1 className='text-[40px] font-semibold leading-[51px] text-center mt-[83px] mb-[83px]'>About Us</h1>

          <main className=' relative h-[1427px]'>
            <div className='flex gap-[59px]'>
                <div className='w-[658px] h-[314px] '>
                  <Image src={Workspace} alt='Workspace Icon' className='w-[126px] h-[120px]'/>
                  <p className='mt-[41px] text-[28px] leading-[40px] font-normal h-[314px]'>At Nok Animation Studios, we offer high quality computer generated graphics and art services in the form of VFX as well as animated films, game assets and other 3d services for our clients in different parts of the world using innovative means to ensure our services are highy affordable while maintaining very high qualities.</p>
                </div>
              <Image src={Warrior1} alt='Game Character' className='w-[543px] h-[830px]'/>
            </div>

            <div className='absolute bottom-1 '>
              <Image src={Warrior2} alt='Game Character' className='w-[611px] h-[830px] '/>
            </div>

          </main>

      </section>

      {/* This is the meet the team section */}
        <h1 className='text-[40px] font-semibold leading-[51px] text-center text-[#292929] mt-[80px] mb-[60px]'>Meet the team</h1>
      <section className='bg-[#FAF7F7] h-[724px]'>
          {/* This is where we display the images of each team member */}
          <main>
            <div className='w-[277px] '>

              <div className='relative'>
                  <div className='pentagon'>
                    {/* <Image src={Vector} alt='Team Member'/> */}
                  </div>
                  {/* <div className='pentagon'> */}
                    {/* <Image  src={Team1}  alt='Team Member' objectFit='cover'  /> */}
                  {/* </div> */}
              </div>
            </div>
          </main>
      </section>
      </motion.div>

      <footer>
        <Footer/>
      </footer>

    </motion.div>
  )
}

export default About