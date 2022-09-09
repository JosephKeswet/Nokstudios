import React from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo black.svg'
import Footer from '../components/Footer'
import Input from '../components/Input'


const Book = () => {
  return (
    <div>
        {/* Navbar goes here */}
      <NavBar logo={logoBlack} color="text-black" paddingTop="pt-[1px]" shadow="shadow-md"/>
        
        <main className='px-[501px] h-[1355px] mt-[47px] mb-[29px] bg-[url("../Assets/img/Book_Bg.png")] bg-contain '>
            <div className='pt-[324px]'>
                <h1 className='text-[35px] font-semibold leading-[42px] text-[#242222] text-center mb-[16px]'>BOOK A SERVICE</h1>
                <p className='w-[535px] h-[68px] text-center'>Select the service you want us render to you from the list. If you’re not sure on what to select, just choose others. Also input your if you have one budget and project requirement specifications. We’ll get back to you with a free quote in no time.</p>
            </div>
            {/* Booking form goes here */}
            <form className='mt-[36px]'>

                <div >
                    <h3 className='pb-[11px]'>Categories</h3>
                    <select className='w-[506px] h-[59px] bg-white' name='categories'>
                        <option value="SELECT PROJECT CATEGORY" >SELECT PROJECT CATEGORY</option>
                    </select>
                </div>
            </form>
        </main>

        {/* Footer goes here */}
        <Footer/>
    </div>
  )
}

export default Book