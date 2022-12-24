import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import logoBlack from '../Assets/logos/Nok-Logo_Black.png'
import logoWhite from '../Assets/logos/Nok-Logo white 1.svg'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faSquareFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import {motion} from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
// import Contact_Bg from '../Assets/img/Contact_Bg.png'


const Contact = () => {
  const form = useRef();
  const notify = () => toast.success("Message sent");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_API_KEY)
      .then((result) => {
          notify();
          console.log('sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

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
        {/* This is where the navbar goes */}
        {/* <NavBar 
         paddingTop="pt-[1px]" 
        logo={logoBlack} 
        logoB={logoWhite}
        colorB='text-white' 
        color='text-black'
        bgBlack='bg-white'
        bgWhite='bg-slate-600'
        shadow="shadow-md" /> */}
        <div>
        <ToastContainer autoClose={3000} />
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
        <nav className={`${show && 'nav'} flex  bg-white  bg-opacity-100 shadow-xl z-50 justify-between px-[20px] pb-[20px] lg:pl-[103px] lg:pr-[106px] w-full fixed pt-5  lg:h-[139px] h-[53px] items-center  duration-700   `}>

            <div className={`flex justify-center items-center  w-[80px] h-[50px] lg:w-[124px]  pt-4}  lg:h-[62px]`} >
                <Image src={logoBlack}  alt='logo' className='lg:w-[124px]  lg:h-[62px]'/>
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
            <ul className='text-black text-[20px] font-normal leading-[14px] mt-5'>
              <Link href='/'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Home</li></Link>
              <Link href='/About'><li className='mb-6  cursor-pointer text-right mr-4 hover:text-[#DC5539]'>About</li></Link>
              <Link href='/#services'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Services</li></Link>
              <Link href='/MainGallery'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Our Works</li></Link>
              <Link href='/Contact'><li className='mb-6 cursor-pointer text-right mr-4 hover:text-[#DC5539]'>Contact Us</li></Link>
            </ul>
          </div>
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

        <main className='flex flex-col pt-[100px] w-full bg-cover bg-center lg:bg-no-repeat lg:flex-row lg:flex  justify-center  lg:pt-[226px] lg:left-0 lg:right-0 lg:relative top-[130px] lg:h-[901px] bg-[url("../Assets/img/Contact_Bg.png")]'>
           {/* <div className='flex justify-center pt-[226px]'>  */}
            <div className='w-[350px] lg:w-[535px] lg:h-[219px] lg:ml-12 mx-auto'>
                <h1 className='text-center mb-[50px] text-4xl lg:text-left lg:text-[35px] font-medium text-[0F0E0E] lg:mb-[24px] font-Inter'>CONTACT US</h1>
                <p className='text-[14px] font-normal leading-[17px] font-Inter  text-[#0F0E0E] mb-[35px]'>Do not be shy, reach out to us using the for below and we’ll respond via mail. 
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
            <form ref={form} onSubmit={sendEmail}>
            <div className='w-[350px] mx-auto lg:w-[704px] lg:h-[376px] lg:ml-[76px] '>
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[704px]" height="h-[57px]" placeholder="Enter your name please" name='from_name' paddingLeft="pl-[19px]" marginBottom="mb-[24px]" />
                <Input inputType="text" width="w-[350px] lg:w-[500px] xl:w-[704px]" height="h-[57px]" placeholder="Enter your email address" name='user_email' paddingLeft="pl-[19px]" marginBottom="mb-[24px]"/>
                <textarea name="message" className='w-[350px] lg:w-[500px] xl:w-[704px] h-[139px] pl-[18px] pt-[15px] mb-[37px]'  placeholder='Type message here'></textarea>

                <motion.div 
              whileTap={{scale: 0.95}}
              className='cursor-pointer  mb-10 hover:drop-shadow-xl'
              >
                <input type='submit' value='SEND' className='bg-[#DC5539] w-[246px] h-[50px] text-[20px] leading-[24px] font-bold text-white'/>
              </motion.div>
            </div>
            </form>
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