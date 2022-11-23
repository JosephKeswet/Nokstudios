import React from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import {motion} from 'framer-motion'
// import Contact_Bg from '../Assets/img/Contact_Bg.png'


const Contact = () => {
  return (
    <div>
        {/* This is where the navbar goes */}
        <NavBar 
         paddingTop="pt-[1px]" 
        logo={logoBlack} 
        logoB={logoWhite}
        colorB='text-white' 
        color='text-black'
        bgBlack='bg-white'
        bgWhite='bg-slate-600'
        shadow="shadow-md" />

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

        <main className='flex flex-col pt-[100px] w-full bg-cover bg-center lg:bg-no-repeat lg:flex-row lg:flex  justify-center  lg:pt-[226px] lg:left-0 lg:right-0 lg:relative top-[130px] lg:h-[901px] bg-[url("../Assets/img/Contact_Bg.png")]'>
           {/* <div className='flex justify-center pt-[226px]'>  */}
            <div className='w-[350px] lg:w-[535px] lg:h-[219px] lg:ml-12 mx-auto'>
                <h1 className='text-center mb-[50px] text-4xl lg:text-left lg:text-[35px] font-medium text-[0F0E0E] lg:mb-[24px]'>CONTACT US</h1>
                <p className='text-[14px] font-normal leading-[17px] text-[#0F0E0E] mb-[35px]'>Do not be shy, reach out to us using the for below and we’ll respond via mail. 
                Our community is rapidly growing by the day. To be updated on what we do, you can simply connect with us via our social media platforms below. You can also reachout by sending us an email.</p>

                <ul className="hidden lg:flex lg:items-center lg:gap-[50px] text-[#DC5539] text-4xl">
                    <li><FontAwesomeIcon icon={faSquareFacebook} /></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faYoutube}/></li>
                    <li><FontAwesomeIcon icon={faPinterest}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                </ul>
            </div>
            {/* This is the contact form */}
            <div className='w-[350px] mx-auto lg:w-[704px] lg:h-[376px] lg:ml-[76px] '>
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[704px]" height="h-[57px]" placeholder="Enter your name please" paddingLeft="pl-[19px]" marginBottom="mb-[24px]" />
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[704px]" height="h-[57px]" placeholder="Enter your email address" paddingLeft="pl-[19px]" marginBottom="mb-[24px]"/>
                <textarea name="message" className='w-[350px] lg:w-[500px] xl:w-[704px] h-[139px] pl-[18px] pt-[15px] mb-[37px]' placeholder='Type message here'></textarea>

                <motion.div 
              whileTap={{scale: 0.95}}
              className='cursor-pointer  mb-10 hover:drop-shadow-xl'
              >
                <Button btnText="SEND" bgColor="bg-[#DC5539]" width="w-[246px]" height="h-[50px]" fontSize="text-[20px]" lineHeight="leading-[24px]" fontWeight="font-bold" textColor="text-[#FFFFFF]"/>
              </motion.div>
            </div>
            {/* </div> */}
        </main>

      </motion.div>

        {/* Footer section */}
        <div className='w-full left-0 right-0 mt-[50px] lg:relative top-[200px] '>
        <Footer/>
        </div>
    </div>
  )
}

export default Contact