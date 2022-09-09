import React from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo black.svg'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Input from '../components/Input'
import Button from '../components/Button'
// import Contact_Bg from '../Assets/img/Contact_Bg.png'


const Contact = () => {
  return (
    <div>
        {/* This is where the navbar goes */}
        <NavBar  logo={logoBlack} color="text-black" paddingTop="pt-[1px]" shadow="shadow-md" />

        <main className='flex justify-center  pt-[226px]  mt-[68px]  h-[833px] bg-[url("../Assets/img/Contact_Bg.png")]'>
           {/* <div className='flex justify-center pt-[226px]'>  */}
            <div className='w-[535px] h-[219px]'>
                <h1 className='text-[35px] font-medium text-[0F0E0E] mb-[24px]'>CONTACT US</h1>
                <p className='text-[14px] font-normal leading-[17px] text-[#0F0E0E] mb-[35px]'>Do not be shy, reach out to us using the for below and we’ll respond via mail. 
                Our community is rapidly growing by the day. To be updated on what we do, you can simply connect with us via our social media platforms below. You can also reachout by sending us an email.</p>

                <ul className="flex items-center gap-[50px] text-[#DC5539] text-4xl">
                    <li><FontAwesomeIcon icon={faSquareFacebook} /></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faYoutube}/></li>
                    <li><FontAwesomeIcon icon={faPinterest}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                </ul>
            </div>
            {/* This is the contact form */}
            <div className='w-[704px] h-[376px] ml-[76px] '>
                <Input inputType="text" width="w-[704px]" height="h-[57px]" placeholder="Enter your name please" paddingLeft="pl-[19px]" marginBottom="mb-[24px]" />
                <Input inputType="text" width="w-[704px]" height="h-[57px]" placeholder="Enter your email address" paddingLeft="pl-[19px]" marginBottom="mb-[24px]"/>
                <textarea name="message" className='w-[704px] h-[139px] pl-[18px] pt-[15px] mb-[37px]' placeholder='Type message here'></textarea>

                <Button btnText="SEND" bgColor="bg-[#DC5539]" width="w-[246px]" height="h-[50px]" fontSize="text-[20px]" lineHeight="leading-[24px]" fontWeight="font-bold" textColor="text-[#FFFFFF]"/>
            </div>
            {/* </div> */}
        </main>


        {/* Footer section */}
        <Footer/>
    </div>
  )
}

export default Contact