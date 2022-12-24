import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Footer from '../components/Footer'
import Input from '../components/Input'
import {motion} from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'





const Book = () => {

  const form = useRef();
  const notify = () => toast.success("Order placed");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_BOOKING_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_API_KEY)
      .then((result) => {
          notify();
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


  const router = useRouter()
  console.log(router.pathname)
  const getColor = (curr)=>{  
    if (router.pathname === curr) {
      return '#DC5539'
    }
  }
  const [myIcon,setIcon] = useState();
  const [toggleNav,setToggle] = useState(false)

  const [show,handleShow] = useState(false);

    // This function toggles the state of the navbar background color
    const transitionNavBar = ()=>{
     if(window.scrollY > 150){
       handleShow(true);
     }else{
       handleShow(false)
     }
   }
 
   // This runs as soon as the component mounts and when the user scrolls down
   useEffect(()=>{
     window.addEventListener("scroll" , transitionNavBar)
     // clean up function
     return ()=> window.removeEventListener("scroll", transitionNavBar)
   },[])


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
    <div>
        {/* Navbar goes here */}
      {/* <NavBar  logo={logoBlack} logoB={logoWhite} color="text-black" colorB='text-black' paddingTop="pt-4" 
      shadow="shadow-md" 
      bgBlack='bg-white'
      bgWhite='bg-slate-900'/> */}
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
        <nav className={`${show && 'nav'} flex  bg-white  bg-opacity-100 shadow-xl z-50 justify-between px-[20px] pb-[20px] lg:pl-[103px] lg:pr-[106px] w-full fixed pt-6  lg:h-[139px] h-[53px] items-center  duration-700   `}>

            <div className={`flex justify-center cursor-pointer items-center  w-[80px] h-[50px] lg:w-[124px]  pt-4}  lg:h-[62px]`} >
              <Link href='/'>
                <Image src={logoBlack}  alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
              </Link>
            </div>
            {/* <div className='lg:hidden hidden w-[80px] h-[50px] lg:w-[124px]  lg:h-[62px]' >
                <Image src={logo} alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
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
          <div className={`${!toggleNav && 'hidden'} w-40 h-52 lg:hidden bg-white fixed top-[52px] border-l-8 border-[#DC5539] left-auto right-0 z-50 flex flex-col`}>
            <ul className='text-black text-[20px] font-normal leading-[14px] mt-5 '>
              <Link href='/'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Home</li></Link>
              <Link href='/About'><li className='mb-6  cursor-pointer text-right mr-4 hover:text-[#DC5539]'>About</li></Link>
              <Link href='/#services'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Services</li></Link>
              <Link href='/MainGallery'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Our Works</li></Link>
              <Link href='/Contact'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Contact Us</li></Link>
            </ul>
          </div>
    </div>
      </div>
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
        <ToastContainer autoClose={4000}/>
        <main className='xl:px-[501px] lg:px-[350px] lg:h-[1355px] w-full lg:bg-cover h-[1200px] bg-no-repeat flex flex-col  mb-[29px] bg-[url("../Assets/img/Book_Bg.png")] xl:bg-contain '>
            <div className=' pt-[150px] w-[350px] mx-auto lg:mx-0 lg:w-[500px] lg:pt-[324px]'>
                <h1 className='text-[35px] font-semibold leading-[42px] text-[#242222] text-center mb-[16px]'>BOOK A SERVICE</h1>
                <p className='lg:w-[535px] w-[350px] h-[68px] text-center text-[#242222] font-normal leading-[17px] text-[14px]'>Select the service you would like from the list below. If you are not sure on what to select, just choose Others. Also input your budget estimate if you have one budget and project brief to give us an idea on your vision. We will get back to you with a reply in no time.</p>
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
                {/* <select  className='w-[243px] h-[42px] bg-white pl-[10px] mt-[8px] border-r-[10px] border-r-transparent' name='currency' >
                        <option value="50USD" name='currency' >50USD</option>
                        <option value="100USD" name='currency' >100USD</option>
                        <option value="200USD" name='currency' >200USD</option>
                        <option value="500USD" name='currency' >500USD</option>]
                        <option value="750USD" name='currency' >750USD</option>
                        <option value="1000USD" name='currency' >1000USD</option>
                        <option value="1500USD" name='currency' >1500USD</option>
                    </select>     */}
                    <input type="text" className='w-[143px] h-[42px] bg-white pl-[10px] mt-[8px] border-r-[10px] border-r-transparent' name='currency' />
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
                  <input className='bg-[#DC5539] font-bold cursor-pointer text-white leading-[24px] text-[20px] w-[246px] h-[50px]' type='submit' value='SUBMIT'   />
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
