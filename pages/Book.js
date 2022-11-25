import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Footer from '../components/Footer'
import Input from '../components/Input'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';




const Book = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_BOOKING_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_API_KEY)
      .then((result) => {
          toast.success("Message sent successfully")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const options = [
    {label: 'Months',value : 'Months'},
    {label : 'Weeks',value : 'Weeks'},
    {label : 'Days',value : 'Days'},
    {label : 'Hours',value : 'Hours'},

  ]


  return (
    <div>
        {/* Navbar goes here */}
      <NavBar  logo={logoBlack} logoB={logoWhite} color="text-black" colorB='text-white' paddingTop="pt-[1px]" 
      shadow="shadow-md" 
      bgBlack='bg-white'
      bgWhite='bg-slate-900'/>
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
        <main className='xl:px-[501px] lg:px-[350px] lg:h-[1355px] w-full lg:bg-cover h-[1200px] bg-no-repeat flex flex-col  mb-[29px] bg-[url("../Assets/img/Book_Bg.png")] xl:bg-contain '>
            <div className=' pt-[150px] w-[350px] mx-auto lg:mx-0 lg:w-[500px] lg:pt-[324px]'>
                <h1 className='text-[35px] font-semibold leading-[42px] text-[#242222] text-center mb-[16px]'>BOOK A SERVICE</h1>
                <p className='lg:w-[535px] w-[350px] h-[68px] text-center text-[#242222] font-normal leading-[17px] text-[14px]'>Select the service you want us render to you from the list. If you’re not sure on what to select, just choose others. Also input your if you have one budget and project requirement specifications. We’ll get back to you with a free quote in no time.</p>
            </div>
            {/* Booking form goes here */}
            <form ref={form} onSubmit={sendEmail} className='mt-[36px]'>

             
                
                <div className='w-[350px] mx-auto lg:mx-0 lg:w-[500px]'>
                <div className='mt-6'>
                  <label className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]' >Name</label>
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[506px]" height="h-[57px]" placeholder="Enter your name please" name='from_name' paddingLeft="pl-[19px]" marginBottom="mb-[24px]" />
                <label className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Email</label>
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[506px]" height="h-[57px]" placeholder="Enter your email address" paddingLeft="pl-[19px]" name='user_email' marginBottom="mb-[24px]"/>
                </div>
                  {/* Select your project category */}
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Categories</h3>
        
                    <select  className='lg:w-[506px] w-[350px] mx-auto h-[59px]  bg-white lg:pl-[10px] border-r-[10px] border-r-transparent' name='category' >
                        <option value="SELECT PROJECT CATEGORY" name='category' >SELECT PROJECT CATEGORY</option>
                        <option value="Animation and modelling" name='category' >Animation and modelling</option>
                        <option value="Graphics design" name='category' >Graphics design</option>
                        <option value="Concept arts design" name='category' >Concept arts design</option>
                        <option value="VFX and Manipulation" name='category' >VFX and Manipulation</option>
                        <option value="Game development" name='category' >Game development</option>
                    </select>    
                </div>
          {/* Describe your project text area */}
                <div className='mt-[20px] w-[350px] lg:w-[500px] mx-auto  '>
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Describe the Project</h3>

                    <textarea name="description" className='lg:w-[506px]  w-[350px] h-[135px] pl-[18px] pt-[15px] mb-[37px]'></textarea>
                </div>

            {/* Select currency */}
                <h3 className='text-center text-[#9D9D9D] text-[16px] font-bold leading-[17px]'>Budget</h3>

                <div className='flex  justify-center '>
                <select  className='w-[243px] h-[42px] bg-white pl-[10px] mt-[8px] border-r-[10px] border-r-transparent' name='currency' >
                        <option value="50USD" name='currency' >50USD</option>
                        <option value="100USD" name='currency' >100USD</option>
                        <option value="200USD" name='currency' >200USD</option>
                        <option value="500USD" name='currency' >500USD</option>]
                        <option value="750USD" name='currency' >750USD</option>
                        <option value="1000USD" name='currency' >1000USD</option>
                        <option value="1500USD" name='currency' >1500USD</option>
                    </select>    
                </div>

                {/* Enter timeline */}  

                  <main className='mt-[27px] w-[350px] mx-auto h-[95px] mb-[23px]'>
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Enter Timeline</h3>
                      <div className='flex items-center gap-[20px]'>
                          <Input inputType="number" width="lg:w-[243px]   w-[200px]" height="h-[42px]" name='timeline_number'  padding_x="px-[20px]"/>
 
                          <select  className='w-[150px] lg:w-[243px] h-[42px] bg-white pl-[10px] border-r-[10px] border-r-transparent' name='timeline' >
                            {options?.map( (option) => (<option key={option.value} value={option.value} name='timeline' >{option.label}</option>))}
                          </select>  


                      </div>
 
                  </main>

              {/* This is the submit button for the form */}
              <div className='flex items-center justify-center'>
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
                  <input className='bg-[#DC5539] font-bold text-white leading-[24px] text-[20px] w-[246px] h-[50px]' type='submit' value='SUBMIT'   />
              </motion.div>
              </div>
            </form>
        </main>

      </motion.div>

        {/* Footer goes here */}
        <Footer/>
    </div>
  )
}

export default Book