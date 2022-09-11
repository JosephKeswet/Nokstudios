import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'




const Book = () => {

  const options = [
    {label: 'Months',value : 'Months'},
    {label : 'Weeks',value : 'Weeks'},
    {label : 'Days',value : 'Days'},
    {label : 'Hours',value : 'Hours'},

  ]

  // const [values,setValues] = useState([])
  // const selectDay = ()=>{
  //   setValues(values)
  // }

  return (
    <div>
        {/* Navbar goes here */}
      <NavBar logo={logoBlack} color="text-black" paddingTop="pt-[1px]" shadow="shadow-md"/>
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
        <main className='px-[501px] h-[1355px] mt-[47px] mb-[29px] bg-[url("../Assets/img/Book_Bg.png")] bg-contain '>
            <div className='pt-[324px]'>
                <h1 className='text-[35px] font-semibold leading-[42px] text-[#242222] text-center mb-[16px]'>BOOK A SERVICE</h1>
                <p className='w-[535px] h-[68px] text-center text-[#242222] font-normal leading-[17px] text-[14px]'>Select the service you want us render to you from the list. If you’re not sure on what to select, just choose others. Also input your if you have one budget and project requirement specifications. We’ll get back to you with a free quote in no time.</p>
            </div>
            {/* Booking form goes here */}
            <form className='mt-[36px]'>

                <div >
                  {/* Select your project category */}
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Categories</h3>
        
                    <select  className='w-[506px] h-[59px] bg-white pl-[10px] border-r-[10px] border-r-transparent' >
                        <option value="SELECT PROJECT CATEGORY" >SELECT PROJECT CATEGORY</option>
                        <option value="Animation and modelling" >Animation and modelling</option>
                        <option value="Graphics design" >Graphics design</option>
                        <option value="Concept arts design" >Concept arts design</option>
                        <option value="VFX and Manipulation" >VFX and Manipulation</option>
                        <option value="Game development" >Game development</option>



                    </select>    
                </div>
          {/* Describe your project text area */}
                <div className='mt-[20px] '>
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Describe the Project</h3>

                    <textarea name="message" className='w-[506px] h-[135px] pl-[18px] pt-[15px] mb-[37px]'></textarea>
                </div>

            {/* Select currency */}
                <h3 className='text-center text-[#9D9D9D] text-[16px] font-bold leading-[17px]'>Select Currency</h3>

                <div className='flex  justify-center '>
                <select  className='w-[243px] h-[42px] bg-white pl-[10px] mt-[8px] border-r-[10px] border-r-transparent' >
                        <option value="USD" >USD</option>
                        <option value="NGN" >NGN</option>
                        <option value="YEN" >YEN</option>
                    </select>    
                </div>

                {/* Enter timeline */}  

                  <main className='mt-[27px] h-[95px] mb-[23px]'>
                    <h3 className='pb-[11px] text-[#9D9D9D] text-[14px] font-normal leading-[17px]'>Enter Timeline</h3>
                      <div className='flex items-center gap-[20px]'>
                          <Input inputType="number" width="w-[243px]" height="h-[42px]"  padding_x="px-[20px]"/>
 
                          <select  className=' w-[243px] h-[42px] bg-white pl-[10px] border-r-[10px] border-r-transparent' >
                            {options?.map( (option) => (<option value={option.value} >{option.label}</option>))}
                          </select>  


                      </div>
 
                  </main>

              {/* This is the submit button for the form */}
              <div className='flex items-center justify-center'>
                  <Button bgColor="bg-[#DC5539]" btnText="SUBMIT" height="h-[50px]" width="w-[246px]" fontSize="text-[20px]" lineHeight="leading-[24px]" fontWeight="font-bold" textColor="text-white"/>
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